import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.Module.css";
import {addPostActionCreator, onPostChangeActionCreator} from "./../../../redux/profileReducer"

const MyPosts = (props) =>{

let addPost = () => {
  props.dispatch(addPostActionCreator()); 
};

let onPostChange = (event) => {
  let data = event.target.value;
  props.dispatch(onPostChangeActionCreator(data));
};

 return (
   <div className={style.item}>
     <h3>My posts</h3>
     <div>
       <div>
         <textarea
           onChange={onPostChange}
           value={props.newPostText}
         />
       </div>
       <div>
         <button onClick={addPost}> Add post</button>
       </div>
     </div>
     <div className={style.item}>
       {props.posts.map((post) => (
         <Post message={post.message} likeCounter={post.likeCounter} />
       ))}
     </div>
   </div>
 );
}

export default MyPosts;
