import React, { Component } from 'react';
import { AppColors, getHeight } from '../../theme';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { addPost, upvote, logout } from '../../store/actions';
import Header from '../../shared/header';
import AddPost from './components/add-post';
import moment from 'moment';
import { styles } from './style';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddPost: false
    };
  }

  renderPost = item => {
    const { user, upvotePost } = this.props;
    const index = item.votes.findIndex(vote => vote.votedby === user);
    const likedIcon =
      index > -1
        ? require('../../../assets/thumbs-up.png')
        : require('../../../assets/like.png');
    return (
      <View style={styles.postCard}>
        <Text>{`${item.text}`}</Text>
        <View style={styles.detailView}>
          <TouchableOpacity
            onPress={() => {
              upvotePost({ userName: user, postId: item.postId });
            }}
          >
            <Image
              source={likedIcon}
              style={{
                height: getHeight(40),
                width: getHeight(40),
                tintColor: index > -1 ? AppColors.voteGreen : 'black'
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'flex-end',
              flex: 1,
              marginLeft: 10
            }}
          >
            <Text
              style={{ color: AppColors.labelColor, textAlign: 'right' }}
            >{`${item.votes.length} votes`}</Text>
            <Text
              style={{ color: 'grey', textAlign: 'right' }}
            >{`Posted on: ${moment(item.createdAt).format(
              'MMM DD, YYYY'
            )}`}</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const { showAddPost } = this.state;
    const { navigation, allPosts, logout } = this.props;
    const backIcon = require('../../../assets/IconBack1.png');

    return (
      <SafeAreaView>
        <View style={styles.parentWrapper}>
          <Header
            title={'Posts'}
            navigation={navigation}
            icon={backIcon}
            right={
              <TouchableOpacity
                onPress={() => {
                  logout();
                  navigation.navigate('login');
                }}
              >
                <Image
                  source={require('../../../assets/logout.png')}
                  resizeMode={'center'}
                  style={styles.logoutButton}
                />
              </TouchableOpacity>
            }
          />
          <FlatList
            data={allPosts}
            renderItem={({ item }) => this.renderPost(item)}
          />
          <TouchableOpacity
            style={styles.addWrapper}
            onPress={() => this.setState({ showAddPost: true })}
          >
            <Image
              source={require('../../../assets/plus.png')}
              style={styles.addImage}
            />
          </TouchableOpacity>
        </View>
        {showAddPost && (
          <AddPost
            closeAddPost={() => this.setState({ showAddPost: false })}
            postContent={text => this.handleAddPost(text)}
          />
        )}
      </SafeAreaView>
    );
  }

  handleAddPost = text => {
    const { addPost } = this.props;
    const postData = {
      text,
      createdAt: moment(),
      votes: [],
      postedBy: 'user1'
    };
    addPost(postData);
  };
}

const mapStateToProps = state => {
  const allPosts = state.allPosts.posts;
  const user = state.user.userName;
  return {
    allPosts,
    user
  };
};

const mapActionToProps = dispatch => {
  return {
    addPost: payload => dispatch(addPost(payload)),
    upvotePost: payload => dispatch(upvote(payload)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapActionToProps)(PostList);
