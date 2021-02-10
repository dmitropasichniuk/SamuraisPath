import React from "react";
import style from "./Dialogs.Module.css"
import DialogsItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import {addMessageActionCreator, onChangeMessageActionCreator} from "./../../redux/state"

const Dialogs = (props) =>{

  // let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  };

  let onChangeMessage = (event) => {
    let message = event.target.value;
    props.dispatch(onChangeMessageActionCreator(message));
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
              <textarea
                // ref={newMessageElement}
                onChange={onChangeMessage}
                value={props.state.newMessageText}
              />
            </div>
            <div>
              <button onClick={addMessage}>Add sms</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dialogs;