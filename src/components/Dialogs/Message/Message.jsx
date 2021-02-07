import React from "react";
import style from "./../Dialogs.Module.css"

const Message = (props) =>{
  return (
    <div>
      <div className={style.dialog}>{props.message}</div>
    </div>
  );
};

export default Message;