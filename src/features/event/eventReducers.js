import {ADD_EVENT, UPDATE_EVENT, DELETE_EVENT} from './eventConstants';
import eventData from '../../data/events';

const initialData = eventData;

const eventReducers = (state = initialData, action) => {
    let newState = state;
    switch(action.type) {
        case ADD_EVENT: 
            return [...state, action.payload];
        case UPDATE_EVENT:
            newState[action.payload.id-1] = action.payload;
            return newState;
            //return [action.payload, ...state.filter(event => action.payload.id !== event.id)];
        case DELETE_EVENT: 
            return [...state.filter(event => action.payload !== event.id)];
        default:
        return state;
    }
};

export default eventReducers;
