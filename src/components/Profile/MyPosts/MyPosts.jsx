import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.Module.css"

const MyPosts = (props) =>{
 return (
   <div className={style.item}>
     <h3>My posts</h3>
     <div>
       <div>
         <textarea></textarea>
       </div>
       <div>
         <button> Add post</button>
       </div>
     </div>
     <div className={style.item}>
       {props.posts.map( post =>  <Post massage={post.message} likeCounter={post.likeCounter} />)}
     </div>
   </div>
 );
}

export default MyPosts;
