import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.Module.css"

const MyPosts = (props) =>{

let newPostElement = React.createRef();

let addPost = ()=> {
  // props.addPost();
  let action = {type: "ADD-POST"};
  props.dispatch(action);
};

let onPostChange = () => {
  let data = newPostElement.current.value;
  // props.updateText(data);
  props.dispatch({type: "UPDATE-TEXT", newText: data})
};

 return (
   <div className={style.item}>
     <h3>My posts</h3>
     <div>
       <div>
         <textarea
           onChange={onPostChange}
           ref={newPostElement}
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
