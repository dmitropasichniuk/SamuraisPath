import React from "react";
import style from "./Dialogs.Module.css"
import DialogsItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

let dialogs = [
  {id:1,  name:'Sucka Valera'},
  {id:2,  name:'Sucka Dimoon'},
];

let messages = [
  {message:'Hi how are u pidr'},
  {message:'Little biches'},
];

let dialogsElements = dialogs.map( dialog =>  <DialogsItem name={dialog.name} id={dialog.id} /> );
let messagesElements = messages.map( message => <Message message={message.message}/> );

const Dialogs = () =>{
    return (
      <div className={style.dialogs}>
        <div className={style.dialogItems}>
          {dialogsElements}
        </div>
        <div className={style.messages}>
          {messagesElements}
        </div>
      </div>
    );
}

export default Dialogs;