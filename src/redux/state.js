const ADD_POST = "ADD-POST";
const UPDATE_TEXT = "UPDATE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          message: "My first massage!",
          likeCounter: "15",
        },
        { message: "My second massage!", likeCounter: "10" },
      ],
      newPostText: "New post text",
    },

    dialogsPage: {
      messages: [
        { message: "Hi how are u" },
        { message: "I am fine thks" },
      ],

      newMessageText: "New message text",

      dialogs: [
        { id: 1, name: "Oleg" },
        { id: 2, name: "John" },
      ],
    },
  },
  _callSubscriber() {
    console.log('State changed')
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state
  },

  dispatch(action) {
    if(action.type === "ADD-POST"){
      let newPost = {
        message: this._state.profilePage.newPostText,
        likeCounter: 123,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-TEXT" ){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if(action.type === "ADD-MESSAGE"){
      let newMessage = {
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if( action.type === "UPDATE-MESSAGE"){
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const onPostChangeActionCreator = (text) => ({ 
  type: UPDATE_TEXT, 
  newText: text 
});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE}); 

export const onChangeMessageActionCreator = (message) => ({
  type: UPDATE_MESSAGE,
  newText: message,
}); 

export default store;