import React from "react";
import style from "./Dialogs.Module.css"
import DialogsItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props) =>{
    return (
      <div className={style.dialogs}>
        <div className={style.dialogItems}>
          { props.state.dialogs.map( dialog =>  <DialogsItem name={dialog.name} id={dialog.id}/>) }
        </div>
        <div className={style.messages}>
          { props.state.messages.map( message =>  <Message message={message.message}/>) }
        </div>
      </div>
    );
}

export default Dialogs;