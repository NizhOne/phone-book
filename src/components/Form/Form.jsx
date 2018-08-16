import React from 'react';
import './form.css';
import PropTypes from 'prop-types';
import { basicForm } from '../../constants';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: props.formData,
            isEdit: props.isEdit
        }
    }
    handleInputChange = ({target: {name, value}}) => {
        this.setState((prevState) => {
            return {
                formData : {
                    ...prevState.formData,
                    [name] : value
                }
            }
        });
    };

    clearInput = () => {
        let tmpObj = this.state.formData;
        for (let i in tmpObj) {
            tmpObj[i] = ''
        }
        this.setState({
            formData: tmpObj
        })
    };

    render() {
        const inputs = basicForm.map((item, i) => {
            return (
                <label className={`label-input`} key={i}>
                    <input type={item.inputType}
                           name={item.name}
                           placeholder={item.placeholder}
                           value={this.state.formData[item.name]}
                           onChange={this.handleInputChange}
                    />
                </label>)
        });
        return (
            <form className={`add-contact-form`}>
                { inputs }
                <button
                    onClick={ (e) => { e.preventDefault(); this.state.isEdit ? this.props.onSaveButtonClick(this.state.isEdit, this.state.formData) : this.props.onButtonClick(this.state.formData); this.clearInput() }}>
                    Save
                </button>
            </form>
        );
    }
};

FormComponent.propTypes = {
    formData: PropTypes.object,
    onButtonClick: PropTypes.func,
};

export default FormComponent