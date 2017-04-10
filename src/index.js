import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom'

// mine
import { createStore } from 'redux'
import { Provider } from 'react-redux'


//import App from './App';
import FriendsApp from './components/friendsApp';
//import './index.css';
import reducer from './reducers'


const store = createStore(reducer);

// src
//ReactDOM.render(
//  <App />,
//  document.getElementById('root')
//);

//ReactDOM.render(
//    <Provider store={store}>
//        <friendsApp />
//    </Provider>,
//    document.getElementById('root')
//)

ReactDOM.render(
    <Provider store={store}>
        <FriendsApp />
    </Provider>,
    document.getElementById('root')
);
