import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.Module.css";

const Header = (props) =>{
 return (
   <header className= {styles.header}>
     <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png"></img>
     <div className={styles.loginBlock}>
       {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
        
     </div>
   </header>
 );
}

export default Header;
