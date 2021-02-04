import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.Module.css"

let posts = [
  {message:'My first massage!', likeCounter: '14'},
  {message:'My second massage!', likeCounter: '10'},
];

let postsElement = posts.map( post =>  <Post massage={post.message} likeCounter={post.likeCounter} />)

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
       {postsElement}
     </div>
   </div>
 );
}

export default MyPosts;
