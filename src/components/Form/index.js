import { connect } from 'react-redux';

import FormComponent from './Form';
import {addContact, resetId, saveContact} from '../../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: (contactData) => {
            dispatch(addContact({id: Date.now(), ...contactData}));
        },
        onSaveButtonClick: (id, contactData) => {
            dispatch(saveContact({id,  ...contactData}));
            dispatch(resetId());
        }
    }
};

const mapStateToProps = (state) => {
    let filledData = state.contacts[getDeletingIndexById(state.editData, state.contacts)];
    return {
        isEdit: state.editData,
        formData: state.editData ?
            { name: filledData.name, email: filledData.email, phoneNumber: filledData.phoneNumber } :
            { name: '', email: '', phoneNumber: '' }

    }
};

const getDeletingIndexById = (id, array) => {
    return array.findIndex((item) => {
        return item.id === id
    });
};

const Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormComponent);

export default Form;