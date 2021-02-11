const ADD_POST = "ADD-POST";
const UPDATE_TEXT = "UPDATE-TEXT";

const profileReducer = (state, action) =>{

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