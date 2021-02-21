import React from "react";
import styles from "./ProfileInfo.Module.css"
import Preloader from "./../../common/Preloader/preloader"
import yesImg from "./../../../assets/images/yesImg.png"
import noImg from "./../../../assets/images/noImg.jpg"

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"></img>
      </div>
      <div className={styles.item}>
        <img src={props.profile.photos.large}/>
        <div> { props.profile.aboutMe}</div>
        <div>{props.profile.contacts.facebook}</div>
        <div>{props.profile.contacts.website}</div>
        <div>{props.profile.contacts.vk}</div>
        <div>{props.profile.contacts.twitter}</div>
        <div>{props.profile.contacts.instagram}</div>
        <div>{props.profile.contacts.youtube}</div>
        <div>{props.profile.contacts.github}</div>
        <div>{props.profile.contacts.mainLink}</div>
        <div>
          {
            props.profile.lookingForAJob ? (
              <img src={yesImg}/>
            ) : (
              <img src={noImg}/>
            )
          }
        </div>
        <div>{props.profile.lookingForAJobDescription}</div>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.userId}</div>
        ava+description
      </div>
    </div>
  );
};

export default ProfileInfo;
