import {ADD_EVENT, UPDATE_EVENT, DELETE_EVENT} from './eventConstants';
import eventData from '../../data/events';

const initialData = eventData;

const eventReducers = (state = initialData, action) => {
    switch(action.type) {
        case ADD_EVENT: 
            return [...state, action.payload];
        case UPDATE_EVENT:
            return [...state.filter(event => action.payload.id !== event.id), action.payload];
        case DELETE_EVENT: 
            return [...state.filter(event => action.payload !== event.id)];
        default:
        return state;
    }
};

export default eventReducers;
