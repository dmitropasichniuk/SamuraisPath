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
      return{
        ...state,
        newMessageText: "",
        messages: [...state.messages, {message: state.newMessageText}],
      };
    case UPDATE_MESSAGE:
      return{ 
        ...state,
        newMessageText: action.newText,
      };
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