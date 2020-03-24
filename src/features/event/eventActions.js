import {ADD_EVENT, UPDATE_EVENT, DELETE_EVENT} from './eventConstants';

export const addEvent = (event) => {
    const action = {
        type: ADD_EVENT,
        payload: event
    }

    return action;
}

export const updateEvent = (event) => {
    const action = {
        type: UPDATE_EVENT,
        payload: event
    }

    return action;
}

export const deleteEvent = (eventId) => {
    const action = {
        type: DELETE_EVENT,
        payload: eventId
    }

    return action;
}