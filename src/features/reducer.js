import { combineReducers } from "redux";
import eventReducers from './event/eventReducers';
import { reducer as FormReducer } from 'redux-form';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';

const reducers = combineReducers({
    eventReducers,
    form: FormReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
  });

  export default reducers;