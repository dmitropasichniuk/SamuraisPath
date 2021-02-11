// import profileReducer from "./profileReducer"
// import dialogsReducer from "./dialogsReducer"
// import sideBarReducer from "./sideBarReducer"

// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         {
//           message: "My first massage!",
//           likeCounter: "15",
//         },
//         { message: "My second massage!", likeCounter: "10" },
//       ],
//       newPostText: "New post text",
//     },

//     dialogsPage: {
//       messages: [
//         { message: "Hi how are u" },
//         { message: "I am fine thks" },
//       ],

//       newMessageText: "New message text",

//       dialogs: [
//         { id: 1, name: "Oleg" },
//         { id: 2, name: "John" },
//       ],
//     },

//     sideBar: {

//     },
//   },
//   _callSubscriber() {
//     console.log('State changed')
//   },

//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
//   getState() {
//     return this._state
//   },

//   dispatch(action) {

//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sideBar = sideBarReducer(this._state.sideBar, action);

//     this._callSubscriber(this._state);
//   },
// };

// export default store;