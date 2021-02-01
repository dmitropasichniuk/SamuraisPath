import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.Module.css"

const Profile = () =>{
 return (
   <div className={styles.content}>
     <div>
       <img src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"></img>
     </div>
     <div>
       ava+description
     </div>
     <MyPosts />
   </div>
 );
}

export default Profile;
