import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import { setupWebsocket } from "./ws/websocket";
import { host, port } from "./config/baseConfig";

const setupStore = () => {

  return setupWebsocket({host, port}).then(({send, receive}) => {
    const store = createStore(
        rootReducer
    );

    receive(store.dispatch);

    return store;
  });
};

setupStore().then((store)=>ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
