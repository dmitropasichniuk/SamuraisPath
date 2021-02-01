import React from "react";
import Post from "./Post/Post";
import style from "./Post/Post.Module.css"

const MyPosts = () =>{
 return (
   <div>
     My posts
     <div>
       <textarea></textarea>
       <button> Add post</button>
     </div>
     <div className={style.item}>
       <Post massage="My first massage!" likeCounter="14"/>
       <Post massage="My second massage!" likeCounter="28"/>
     </div>
   </div>
 );
}

export default MyPosts;
