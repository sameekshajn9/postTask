import moment from 'moment';

const postArray = [
  {
    postId: 0,
    text: 'No one is you. That’s your power!',
    votes: [
      { votedby: 'user0' },
      { votedby: 'user1' },
      { votedby: 'user2' },
      { votedby: 'user3' },
      { votedby: 'user4' }
    ],
    postedBy: 'user0',
    createdAt: moment()
  },
  {
    postId: 1,
    text:
      'Life is like a balloon..If you never let go, you will not know how high can you rise. Sometimes life can surprise you with a happy coincidence.',
    votes: [
      { votedby: 'user8' },
      { votedby: 'user1' },
      { votedby: 'user2' },
      { votedby: 'user3' },
      { votedby: 'user4' },
      { votedby: 'user9' },
      { votedby: 'user10' },
      { votedby: 'user33' },
      { votedby: 'user30' },
      { votedby: 'user40' }
    ],
    postedBy: 'user0',
    createdAt: moment()
  },
  {
    postId: 2,
    text:
      'Stop looking for happiness in the same place you just lost it. Escape the ordinary. Sweeter than honey!!',
    votes: [
      { votedby: 'user80' },
      { votedby: 'user1' },
      { votedby: 'user20' },
      { votedby: 'user0' },
      { votedby: 'user45' },
      { votedby: 'user7' },
      { votedby: 'user1' },
      { votedby: 'user33' },
      { votedby: 'user3' },
      { votedby: 'user9' }
    ],
    postedBy: 'user0',
    createdAt: moment()
  }
];

const defaultState = {
  posts: postArray
};

const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POST': {
      console.log(state, action, 'here');
      const stateArray = [...state.posts];
      const newposts = stateArray.concat({
        ...action.payload,
        postId: stateArray.length
      });
      return {
        ...state,
        posts: newposts
      };
    }
    case 'UPVOTE_POST': {
      const { postId, userName } = action.payload;
      const allPosts = [...state.posts];
      const index = allPosts.findIndex(p => p.postId === postId);

      if (index > -1 && userName) {
        const votes = allPosts[index].votes;
        const indexVote = votes.findIndex(
          p => p.votedby.toLowerCase() === userName.toLowerCase()
        );
        let updatedVotes = [];
        if (indexVote > -1) {
          votes.splice(indexVote, 1);
          updatedVotes = votes;
        } else {
          updatedVotes = votes.concat({ votedby: userName });
        }
        const updatedPost = {
          ...allPosts[index],
          votes: updatedVotes
        };
        allPosts.splice(index, 1, updatedPost);
      }
      return { ...state, posts: allPosts };
    }
    default:
      return state;
  }
};
export default postReducer;
