import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.Module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) =>{
 return (
   <div>
     <ProfileInfo />
     <MyPosts
       posts={props.state.posts}
       newPostText={props.state.newPostText}
       updateText={props.updateText}
       addPost={props.addPost}
     />
   </div>
 );
}

export default Profile;
