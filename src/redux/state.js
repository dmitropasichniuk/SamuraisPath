import renderEntireTree from "../render";

let state = {
  profilePage: {
    posts : [
      {
        message:"My first massage!", 
        likeCounter: '15'
      },
      {message:'My second massage!', likeCounter: '10'},
    ],
  },

  dialogsPage:{
    messages : [
      {message:'Hi how are u pidr'},
      {message:'Little biches'},
    ],

    dialogs: [
      {id:1,  name:'Sucka Valera'},
      {id:2,  name:'Sucka Dimoon'},
    ],
  },
}

export let addPost = (postMessage) =>{

  let newPost = {
    message: postMessage,
    likeCounter: 1233
  }

  state.profilePage.posts.push(newPost);

  renderEntireTree(state);
}

export default state;