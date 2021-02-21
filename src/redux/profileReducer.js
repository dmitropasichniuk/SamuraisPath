
const ADD_POST = "ADD-POST";
const UPDATE_TEXT = "UPDATE-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    {
      message: "My first massage!",
      likeCounter: "15",
    },
    { message: "My second massage!", likeCounter: "10" },
  ],
  newPostText: "New post text",
  profile: null,
};

const profileReducer = (state=initialState, action) =>{

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, {message: state.newPostText, likeCounter: 666,}],
      };

    case UPDATE_TEXT:
      return { 
        ...state,
        newPostText: action.newText,
       };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
      
    default: return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const onPostChangeActionCreator = (text) => ({
  type: UPDATE_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer; 