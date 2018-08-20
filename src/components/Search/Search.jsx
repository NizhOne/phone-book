import React from 'react';
import PropTypes from 'prop-types';

import './search.css';

const SearchComponent = ({onSearchChange, value}) => (
    <div className={`search`}>
        <input
            className={`search__input`}
            placeholder={'Search'}
            onChange={({target: {value}}) => onSearchChange(value)}
            value={value}
            type={`search`}
        />
        <div className={`clickable`}/>
    </div>
);

SearchComponent.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
    value: PropTypes.string
};

export default SearchComponent;