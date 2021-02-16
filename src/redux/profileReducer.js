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
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost)
      stateCopy.newPostText = "";
      return stateCopy;
    case UPDATE_TEXT:
      let stateCopy2 = {...state};
      stateCopy2.newPostText = action.newText;
      return stateCopy2;
      
    default: return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const onPostChangeActionCreator = (text) => ({ 
  type: UPDATE_TEXT, 
  newText: text 
});

export default profileReducer; 