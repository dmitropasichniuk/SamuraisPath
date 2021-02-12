import React from "react";
import StoreContext from "../../StoreContext";
import {addMessageActionCreator, onChangeMessageActionCreator} from "./../../redux/dialogsReducer"
import Dialogs from "./Dialogs";


const DialogsContainer = () =>{

    return (
      <StoreContext.Consumer>
        {
          (store) => {
            let state = store.getState();

            let addMessage = () => {
              store.dispatch(addMessageActionCreator());
            };

            let onChangeMessage = (message) => {
              store.dispatch(onChangeMessageActionCreator(message));
            };

            return (
              <Dialogs
                addMessage={addMessage}
                onChangeMessage={onChangeMessage}
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                newMessageText={state.dialogsPage.newMessageText}
              />
            );
          }
        }
      </StoreContext.Consumer>
      
    );
}

export default DialogsContainer;