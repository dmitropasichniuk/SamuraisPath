import React from "react";
import styles from "./Post.Module.css"

const Post = (props) =>{
 return (
   <div className={styles.item}>
     <div>
       <img src="https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg"></img>
       {props.massage}
     </div>
     <div>
       {props.likeCounter}
     </div>
   </div>
 );
}

export default Post;
