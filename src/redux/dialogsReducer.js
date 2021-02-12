const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let initialState = {
    messages: [
      { message: "Hi how are u" },
      { message: "I am fine thks" },
    ],

    dialogs: [
      { id: 1, name: "Oleg" },
      { id: 2, name: "John" },
    ],

    newMessageText: "New message text",
};

const dialogsReducer = (state = initialState, action) =>{

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_MESSAGE:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
} 

export const addMessageActionCreator = () => ({type: ADD_MESSAGE}); 

export const onChangeMessageActionCreator = (message) => ({
  type: UPDATE_MESSAGE,
  newText: message,
}); 

export default dialogsReducer;