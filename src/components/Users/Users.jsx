import React from "react";
import style from "./Users.Module.css"

const Users = (props) =>{

  if(props.users.length === 0){
    props.setUsers([
      {
        id: 1,
        imgUrl: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg",
        followed: true,
        fullName: "Oleg",
        status: "I am a boss",
        location: { city: "Kiev", country: "Ukraine" },
      },
      {
        id: 2,
        imgUrl: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg",
        followed: false,
        fullName: "John",
        status: "I am big boss",
        location: { city: "Vinnitsia", country: "Ukraine" },
      },
      {
        id: 3,
        imgUrl: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg",
        followed: true,
        fullName: "Valentine",
        status: "I am a little boss",
        location: { city: "Arizona", country: "USA" },
      },
    ]);
  }
  

    return (
      <div>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.imgUrl} className={style.userPhoto}/>
              </div>
              <div>
                {u.followed 
                ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> 
                : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
              </div>
            </span>
            <span>
              <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
}

export default Users;