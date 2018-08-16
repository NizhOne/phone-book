import {getFromStorage} from './localStorageClient';

export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const SAVE_CONTACT = 'SAVE_CONTACT';
export const SEARCH = 'SEARCH';
export const SET_ID = 'SET_ID';
export const RESET_ID = 'RESET_ID';
export const REQUEST_CONTACTS = 'REQUEST_CONTACTS';

export function requestContacts(contacts) {
    return {
        type: REQUEST_CONTACTS,
        contacts
    }
}

export function fetchContacts(url) {
    return (dispatch) => {
        getFromStorage(url).then((response) => dispatch(requestContacts(response)));
    }
}

export function addContact(contactData) {
    return {
        type: ADD_CONTACT,
        contactData
    }
}

export function deleteContact(contactId) {
    return {
        type: DELETE_CONTACT,
        contactId
    }
}

export function saveContact(contactData) {
    return {
        type: SAVE_CONTACT,
        contactData
    }
}

export function search(searchString) {
    return {
        type: SEARCH,
        searchString,
    }
}

export function setId(id) {
    return {
        type: SET_ID,
        id
    }
}

export function resetId() {
    return {
        type: RESET_ID
    }
}