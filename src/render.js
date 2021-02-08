import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import { addPost} from "./redux/state"
import { updateText} from "./redux/state"
import { addMessage} from "./redux/state"
import { updateMessage} from "./redux/state"



let renderEntireTree = (state) =>{
  ReactDOM.render(
    <BrowserRouter>
      <App 
        state={state} 
        addPost={addPost} 
        updateText={updateText} 
        addMessage={addMessage} 
        updateMessage={updateMessage} 
        />
    </BrowserRouter>,
    document.getElementById("root")
  );
}

export default renderEntireTree;