import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.Module.css"

const MyPosts = (props) =>{

let newPostElement = React.createRef();

let addPost = ()=> {
  
  let data = newPostElement.current.value;
  props.addPost(data);
  newPostElement.current.value = '';
}

 return (
   <div className={style.item}>
     <h3>My posts</h3>
     <div>
       <div>
         <textarea ref={newPostElement}></textarea>
       </div>
       <div>
         <button onClick={addPost}> Add post</button>
       </div>
     </div>
     <div className={style.item}>
       {props.state.posts.map( post =>  <Post message={post.message} likeCounter={post.likeCounter} />)}
     </div>
   </div>
 );
}

export default MyPosts;
