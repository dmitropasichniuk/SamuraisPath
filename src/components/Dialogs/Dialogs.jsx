import React from "react";
import style from "./Dialogs.Module.css"
import DialogsItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props) =>{

let newSms = React.createRef();

let showNewSms = () => {
  alert(newSms.current.value)
};

    return (
      <div className={style.dialogs}>
        <div className={style.dialogItems}>
          {props.state.dialogs.map((dialog) => (
            <DialogsItem name={dialog.name} id={dialog.id} />
          ))}
        </div>
        <div className={style.messages}>
          {props.state.messages.map((message) => (
            <Message message={message.message} />
          ))}
          <div>
            <div>
              <textarea ref={newSms}></textarea>
            </div>
            <div>
              <button onClick={showNewSms}>Add sms</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dialogs;