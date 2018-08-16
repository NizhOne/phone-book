import React from 'react';
import PropTypes from 'prop-types';

import './search.css';

const SearchComponent = ({ searchString, onSearchChange }) =>
    <div className={`search`}>
        <input
            className={`search__input`}
            placeholder={'Search'}
            onChange={({ target: { value } }) => onSearchChange(value)}
            value={searchString} type={`search`} />
        <div className={`clickable`} />
    </div>

SearchComponent.propTypes = {
    onChange: PropTypes.func,
    searchString: PropTypes.string
};

export default SearchComponent;