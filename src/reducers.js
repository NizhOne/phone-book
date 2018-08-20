import {ADD_CONTACT, SAVE_CONTACT, DELETE_CONTACT, SEARCH, SET_ID, RESET_ID, RECEIVE_CONTACTS} from './actions';
import {combineReducers} from 'redux';
import {setInStorage} from './localStorageClient';

const initialState = null;

function contacts(state = initialState ? initialState : [], action) {
    switch (action.type) {
        case RECEIVE_CONTACTS:
            return action.contacts ? action.contacts : [];
        case ADD_CONTACT:
            let add_contact = [
                ...state,
                {
                    ...action.contactData,
                }
            ];
            setInStorage(add_contact, 'tableData');
            return add_contact;
        case DELETE_CONTACT:
            let delete_contact = state.filter((item) => {
                return item.id !== action.contactId;
            });
            setInStorage(delete_contact, 'tableData');
            return delete_contact;
        case SAVE_CONTACT:
            let save_contact = state.map((item) => {
                if (item.id === action.contactData.id) {
                    return action.contactData;
                } else {
                    return item;
                }
            });
            setInStorage(save_contact, 'tableData');
            return save_contact;
        default:
            return state;
    }
}

function searchContacts(state = '', action) {
    switch (action.type) {
        case SEARCH:
            return action.searchString;
        default:
            return state;
    }
}

function editData(state = '', action) {
    switch (action.type) {
        case SET_ID:
            return action.id;
        case RESET_ID:
            return '';
        default:
            return state;
    }
}

function spinner(state = {}, action) {

}

const contactsApp = combineReducers({
    contacts,
    searchContacts,
    editData
});

export default contactsApp;

