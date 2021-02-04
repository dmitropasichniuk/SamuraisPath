import React from "react";
import style from "./Dialogs.Module.css"
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  return (
    <div className={style.dialog}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) =>{
  return(
    <div className={style.dialog}>{props.message}</div>
  )
};

const Dialogs = () =>{
    return (
      <div className={style.dialogs}>
        <div className={style.dialogItems}>
          <DialogsItem name="Sucka Valera" id="1" />
          <DialogsItem name="Sucka Igor" id="2" />
          <DialogsItem name="Sucka Sanya" id="3" />
          <DialogsItem name="Sucka Dimoooon" id="4" />
        </div>
        <div className={style.messages}>
          <Message message="Hi how are u"/>
          <Message message="YO"/>
          <Message message="Little biches"/>
        </div>
      </div>
    );
}

export default Dialogs;