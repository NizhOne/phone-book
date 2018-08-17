import React from 'react';
import PropTypes from 'prop-types';

import { basicForm } from '../../constants';
import Input from '../Input';

import './form.css';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: props.formData,
        }
    }
    handleInputChange = ({target: {name, value}}) => {
        this.setState({
            formData : {
                ...this.state.formData,
                [name] : value
            }
        });
    };

    clearInput = () => {
        this.setState({
            formData: this.props.formData
        })
    };

    render() {
        return (
            <form className={`add-contact-form`}>
                { basicForm.map(({ type, name, placeholder }) => {
                    return <Input
                        onChange={this.handleInputChange}
                        value={this.state.formData[name]}
                        placeholder={placeholder}
                        name={name} type={type}
                        key={name}/>
                }) }
                <button
                    onClick={ (e) => { e.preventDefault(); this.props.isEdit ?
                        this.props.onSaveButtonClick(this.props.isEdit, this.state.formData) :
                        this.props.onButtonClick(this.state.formData); this.clearInput() }}>
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