import React from "react";
import style from "./Dialogs.Module.css"
import { NavLink } from "react-router-dom";

const Dialogs = () =>{
    return (
      <div className={style.dialogs}>
        <div className={style.dialogItems}>
          <div className={style.dialog}>
            <NavLink to="/dialogs/1">Valera</NavLink>
          </div>
          <div className={style.dialog}>
            <NavLink to="/dialogs/2">Igor</NavLink>
          </div>
          <div className={style.dialog}>
            <NavLink to="/dialogs/3">Dimoooon</NavLink>
          </div>
          <div className={style.dialog}>
            <NavLink to="/dialogs/4">Sanya</NavLink>
          </div>
        </div>
        <div className={style.massages}>
          <div className={style.dialog}>Some massage</div>
          <div className={style.dialog}>hi</div>
          <div className={style.dialog}>yo</div>
        </div>
      </div>
    );
}

export default Dialogs;