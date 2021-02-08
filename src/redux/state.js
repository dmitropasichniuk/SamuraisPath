import renderEntireTree from "../render";

let state = {
  profilePage: {
    posts: [
      {
        message: "My first massage!",
        likeCounter: "15",
      },
      { message: "My second massage!", likeCounter: "10" },
    ],
    newPostText: "Hui sobaky",
  },

  dialogsPage: {
    messages: [{ message: "Hi how are u pidr" }, { message: "Little biches" }],

    newMessageText :"zalupa",

    dialogs: [
      { id: 1, name: "Sucka Valera" },
      { id: 2, name: "Sucka Dimoon" },
    ],
  },
};

export let addPost = () =>{

  let newPost = {
    message: state.profilePage.newPostText,
    likeCounter: 123,
  }

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}

export let updateText = (newText) =>{

  state.profilePage.newPostText=newText;
  renderEntireTree(state);
}

export let addMessage = () =>{

  let newMessage = {
    message: state.dialogsPage.newMessageText,
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  renderEntireTree(state);
}

export let updateMessage = (newText) =>{

  state.dialogsPage.newMessageText = newText;
  renderEntireTree(state);
}

export default state; 