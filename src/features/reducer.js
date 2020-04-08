import { combineReducers } from "redux";
import eventReducers from './event/eventReducers';
import authReducer from './auth/authReducer';
import { reducer as FormReducer } from 'redux-form';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';

const reducers = combineReducers({
    eventReducers,
    authReducer: authReducer,
    form: FormReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
  });

  export default reducers;