import { connect } from 'react-redux';
import TableComponent from './Table';
import {deleteContact,  fetchContacts, setId} from '../../actions';

const getVisibleContacts = (contacts,  searchString) => {
    return searchString.length > 0 ?
        contacts.filter(item => searchInRow(item, searchString)) : contacts;
};

const searchInRow = (row, searchString) => {
    return Boolean((Object.values(row).splice(1, 3).filter((rowItem) => {
        return rowItem.indexOf(searchString) >= 0
    })).length);
};

const mapStateToProps = (state) => {
    return {
        tableData: getVisibleContacts(state.contacts, state.searchContacts)
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => {
            dispatch(deleteContact(id))
        },
        editItem: (id) => {
            dispatch(setId(id));
        },
        fetchContacts: (url) => {
            dispatch(fetchContacts(url));
        }
    }
};

const Table = connect(
    mapStateToProps,
    mapDispatchToProps
)(TableComponent);

export default Table;