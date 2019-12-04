import React, { useState } from 'react';
import { AppColors, getWidth, getHeight } from '../../../../theme';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import { styles } from './style';

const AddPost = props => {
  const [postText, setPostText] = useState('');
  const { closeAddPost, postContent } = props;

  const addPost = () => {
    if (postText && postText !== '') {
      postContent(postText);
      closeAddPost();
    } else {
      Alert.alert('Empty post', 'Please type something to post.');
    }
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={closeAddPost}>
        <View style={styles.parentWrapper}>
          <View style={styles.postCard}>
            <View
              style={{
                margin: 10,
                borderColor: 'grey',
                borderRadius: 5,
                borderWidth: 1,
                flex: 1
              }}
            >
              <TextInput
                style={{
                  padding: 5,
                  flex: 1,
                  textAlign: 'auto',
                  textAlignVertical: 'top'
                }}
                multiline={true}
                placeholder={"What's on your mind?"}
                value={postText}
                onChangeText={value => setPostText(value)}
              />
            </View>
            <TouchableOpacity onPress={() => addPost()}>
              <View
                style={{
                  alignSelf: 'flex-end',
                  backgroundColor: AppColors.labelColor,
                  height: getHeight(50),
                  width: getWidth(80),
                  marginBottom: getHeight(20),
                  marginRight: getWidth(10),
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '600',
                    color: AppColors.white
                  }}
                >
                  POST
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default AddPost;
