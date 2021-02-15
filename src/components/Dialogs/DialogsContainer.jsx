import { connect } from "react-redux";
import {addMessageActionCreator, onChangeMessageActionCreator} from "./../../redux/dialogsReducer"
import Dialogs from "./Dialogs";

let mapStateToProps = (state)=> {
  return {
    // dialogsPage: state.dialogsPage,
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
}

let mapDispatchToProps = (dispatch)=> {
  return{
    onChangeMessage: (message)=>{
      dispatch(onChangeMessageActionCreator(message));
    },
    addMessage: ()=>{
      dispatch(addMessageActionCreator());
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;