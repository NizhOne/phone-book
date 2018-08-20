import {getFromStorage, setInStorage} from './localStorageClient';

export const SET_SPINNER = 'SET_SPINNER';
export function setSpinner(spinnerType = 'loading') {
    return {
        type: SET_SPINNER,
        spinnerType
    }
}

export const RESET_SPINNER = 'RESET_SPINNER';
export function resetSpinner() {
    return {
        type: RESET_SPINNER
    }
}

export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';
export function receiveContacts(contacts) {
    return {
        type: RECEIVE_CONTACTS,
        contacts
    };
}

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export function fetchContacts(url) {
    return dispatch => getFromStorage(url).then(response => dispatch(receiveContacts(response)));
}

export const SEND_CONTACTS = 'SEND_CONTACTS';
export function sendContacts(data, url) {
    return dispatch => setInStorage(data,  url).then(() => dispatch(resetSpinner()));
}

export const ADD_CONTACT = 'ADD_CONTACT';
export function addContact(contactData) {
    return {
        type: ADD_CONTACT,
        contactData
    };
}

export const DELETE_CONTACT = 'DELETE_CONTACT';
export function deleteContact(contactId) {
    return {
        type: DELETE_CONTACT,
        contactId
    };
}

export const SAVE_CONTACT = 'SAVE_CONTACT';
export function saveContact(contactData) {
    return {
        type: SAVE_CONTACT,
        contactData
    };
}

export const SEARCH = 'SEARCH';
export function search(searchString) {
    return {
        type: SEARCH,
        searchString,
    };
}

export const SET_ID = 'SET_ID';
export function setId(id) {
    return {
        type: SET_ID,
        id
    };
}

export const RESET_ID = 'RESET_ID';
export function resetId() {
    return {
        type: RESET_ID
    };
}