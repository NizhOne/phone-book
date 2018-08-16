import React from 'react';
import './form.css';
import PropTypes from 'prop-types';
import { basicForm } from '../../constants';
import Input from '../Input';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: props.formData,
        }
    }
    handleInputChange = ({ target: { name, value } }) =>
        this.setState({
            formData: {
                ...this.state.formData,
                [name]: value
            }
        })

    clearInput = () => this.setState({ formData: this.props.formData })

    render() {
        const { isEdit, onButtonClick, onSaveButtonClick } = this.props
        const { formData } = this.state

        return (
            <form className={`add-contact-form`}>
                {basicForm.map(({ type, name, placeholder }) => <Input
                    key={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={this.handleInputChange}
                />
                )}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        isEdit ?
                            onSaveButtonClick(isEdit, formData) :
                            onButtonClick(formData);
                        this.clearInput()
                    }}>
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