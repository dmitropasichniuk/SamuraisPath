import { connect } from "react-redux";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "./../../../redux/profileReducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         let onPostChange = (text) => {
//           store.dispatch(onPostChangeActionCreator(text));
//         };
//         return (
//           <MyPosts
//             addPost={addPost}
//             onPostChange={onPostChange}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state)=> {
 return{
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
 }
};

let mapDispatchToProps = (dispatch)=> {
 return{
  addPost: () => {
    dispatch(addPostActionCreator());
  },
  onPostChange: (text) => {
    dispatch(onPostChangeActionCreator(text));
  },
 }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
