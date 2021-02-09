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

  addPost () {
    let newPost = {
      message: this._state.profilePage.newPostText,
      likeCounter: 123,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  addMessage () {
    let newMessage = {
      message: this._state.dialogsPage.newMessageText,
    };

    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateMessage (newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },

  subscribe (observer) {
    this._callSubscriber = observer;
  },

  // set_state (_state) {
  //   this._state = this.__state
  // },

  getState () {
    return this._state
  }
};
export default store;