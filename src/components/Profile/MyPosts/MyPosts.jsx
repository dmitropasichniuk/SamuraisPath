import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.Module.css"

const MyPosts = () =>{
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
       <Post massage="My first massage!" likeCounter="14" />
       <Post massage="My second massage!" likeCounter="28" />
     </div>
   </div>
 );
}

export default MyPosts;
