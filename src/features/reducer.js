import { combineReducers } from "redux";
import eventReducers from './event/eventReducers';
import { reducer as FormReducer } from 'redux-form';

const reducers = combineReducers({
    eventReducers,
    form: FormReducer
  });

  export default reducers;