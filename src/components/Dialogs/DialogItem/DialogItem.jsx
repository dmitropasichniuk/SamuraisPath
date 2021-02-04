import React from "react";
import style from "./../Dialogs.Module.css"
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  return (
    <div className={style.dialog}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
}

export default DialogsItem;