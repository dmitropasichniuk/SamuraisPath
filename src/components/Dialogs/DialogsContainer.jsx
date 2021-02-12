import React from "react";
import {addMessageActionCreator, onChangeMessageActionCreator} from "./../../redux/dialogsReducer"
import Dialogs from "./Dialogs";

const DialogsContainer = (props) =>{

  let state = props.store.getState();
  
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onChangeMessage = (message) => {  
    props.store.dispatch(onChangeMessageActionCreator(message));
  };

    return (
      <Dialogs 
        addMessage={addMessage} 
        onChangeMessage={onChangeMessage} 
        dialogs={state.dialogsPage.dialogs} 
        messages={state.dialogsPage.messages} 
        newMessageText={state.dialogsPage.newMessageText  }
      />
    );
}

export default DialogsContainer;