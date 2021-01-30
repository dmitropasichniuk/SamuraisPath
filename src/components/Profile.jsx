import React from "react";
import styles from "./Profile.Module.css"

const Profile = () =>{
 return (
   <div className={styles.content}>
     <div >
       <img src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"></img>
     </div>
     <div>ava+description</div>
     <div>
       My posts
       <div>New post</div>
     </div>
     <div className= {styles.item}>
       <div>post 1</div>
       <div>post 2</div>
     </div>
   </div>
 );
}

export default Profile;
