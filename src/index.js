import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import reducer from './features/reducer';
import './index.css';
import App from './app/layout/App';
import thunk from 'redux-thunk';
import firebase from './features/auth/Firebase'
import * as serviceWorker from './serviceWorker';

const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true
}

const middlewares = [thunk.withExtraArgument({getFirebase, getFirestore})];
const composeEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares), 
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
    );
    
const store = createStore(reducer, composeEnhancer);
const rootEL = document.getElementById('root');


let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,            
        rootEL
    );
}

if(module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render)
    })
}

render();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
