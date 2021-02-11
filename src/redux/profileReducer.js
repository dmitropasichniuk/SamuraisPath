const ADD_POST = "ADD-POST";
const UPDATE_TEXT = "UPDATE-TEXT";

let initialState = {
  posts: [
    {
      message: "My first massage!",
      likeCounter: "15",
    },
    { message: "My second massage!", likeCounter: "10" },
  ],
  newPostText: "New post text",
};

const profileReducer = (state=initialState, action) =>{

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        message: state.newPostText,
        likeCounter: 123,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_TEXT:
      state.newPostText = action.newText;
      return state;
      
    default: return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const onPostChangeActionCreator = (text) => ({ 
  type: UPDATE_TEXT, 
  newText: text 
});

export default profileReducer; 