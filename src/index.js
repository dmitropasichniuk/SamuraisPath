import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import store from './redux/state'

let renderEntireTree = (state) =>{
  ReactDOM.render(
    <BrowserRouter>
      <App 
        store={store}
        state={store.getState()} 
        addPost={store.addPost} 
        updateText={store.updateText} 
        addMessage={store.addMessage} 
        updateMessage={store.updateMessage} 
        />
    </BrowserRouter>,
    document.getElementById("root")
  );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

reportWebVitals();
