import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.Module.css";

const MyPosts = (props) =>{

let onAddPost = () => {
  props.addPost();
};

let onPostChange = (event) => {
  let text = event.target.value;
  props.onPostChange(text);
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
         <button onClick={onAddPost}> Add post</button>
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
