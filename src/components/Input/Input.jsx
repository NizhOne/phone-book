import React from 'react'

const Input = ({ type, name, placeholder, value, onChange }) =>
    <label className={`label-input`}>
        <input type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </label>

export default Input