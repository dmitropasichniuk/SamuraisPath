import React from "react";
import style from "./Dialogs.Module.css"
import DialogsItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props) =>{

  let onAddMessage = () => {
    props.addMessage();
  };

  let onChangeMessage = (event) => {
    let message = event.target.value;
    props.onChangeMessage(message);
  };

    return (
      <div className={style.dialogs}>
        <div className={style.dialogItems}>
          {props.dialogs.map((dialog) => (
            <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>
          ))}
        </div>
        <div className={style.messages}>
          {props.messages.map((message) => (
            <Message key={message.id} message={message.message} />
          ))}
          <div>
            <div>
              <textarea
                onChange={onChangeMessage}
                value={props.newMessageText}
              />
            </div>
            <div>
              <button onClick={onAddMessage}>Add sms</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dialogs;