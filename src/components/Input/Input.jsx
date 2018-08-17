import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const Input = ({type, name, onChange, placeholder, value}) =>
    <label className={`label-input`}>
        <input type={type}
               name={name}
               placeholder={placeholder}
               value={value}
               onChange={onChange}
        />
    </label>;

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired
};

export default Input;