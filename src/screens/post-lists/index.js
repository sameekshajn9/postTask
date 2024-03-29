import React, { Component } from 'react';
import { AppColors, getHeight } from '../../theme';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Keyboard,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { addPost, upvote, logout, getAllPosts } from '../../store/actions';
import Header from '../../shared/header';
import AddPost from './components/add-post';
import moment from 'moment';
import { styles } from './style';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddPost: false,
      keyboardState: ''
    };
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide
    );
  }

  componentDidMount() {
    const { getAllPosts } = this.props;
    getAllPosts();
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({
      keyboardState: 'opened'
    });
  };

  _keyboardDidHide = () => {
    this.setState({
      keyboardState: 'closed'
    });
  };

  hasVotes = item => {
    const { user } = this.props;
    if (item && item.votes && item.votes.length > 0) {
      const hasvoted = item.votes.findIndex(
        vote => vote.votedby.toLowerCase() === user.toLowerCase()
      );
      return hasvoted;
    }
    return -1;
  };

  renderPost = item => {
    const { user, upvotePost } = this.props;
    const index = this.hasVotes(item);
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

  closePopup = () => {
    const { keyboardState } = this.state;
    if (keyboardState === 'opened') {
      Keyboard.dismiss();
      return;
    }
    this.setState({
      showAddPost: false
    });
  };

  render() {
    const { showAddPost } = this.state;
    const { navigation, allPosts, logout } = this.props;
    const backIcon = require('../../../assets/IconBack1.png');
    console.log(allPosts);
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
          <ScrollView contentContainerStyle={styles.contentContainerStyle}>
            {allPosts && allPosts.map(item => this.renderPost(item))}
          </ScrollView>
          {/* <FlatList
            data={allPosts}
            renderItem={({ item }) => this.renderPost(item)}
          /> */}
          {/* <View style={{ height: 30 }} /> */}
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
            closeAddPost={this.closePopup}
            postContent={text => this.handleAddPost(text)}
          />
        )}
      </SafeAreaView>
    );
  }

  handleAddPost = text => {
    const { addPost, user } = this.props;
    const postData = {
      text,
      createdAt: moment(),
      votes: [],
      postedBy: user
    };
    addPost(postData);
    this.setState({ showAddPost: false });
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
    logout: () => dispatch(logout()),
    getAllPosts: () => dispatch(getAllPosts())
  };
};

export default connect(mapStateToProps, mapActionToProps)(PostList);
