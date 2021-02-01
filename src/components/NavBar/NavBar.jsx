import React from "react";
import styles from "./NavBar.Module.css"

const NavBar = () =>{
 return (
   <nav className= {styles.nav}>
     <div className= {styles.item}>
       <a>Profile</a>
     </div>
     <div className={styles.item}>  
       <a>Massages</a>
     </div>
     <div className={styles.item}>
       <a>News</a>
     </div>
     <div className={styles.item}>
       <a>Music</a>
     </div>
     <div className={styles.item}>
       <a>Settings</a>
     </div>
   </nav>
 );
}

export default NavBar;
