import React from 'react';
import PropTypes from 'prop-types';
import { ClimbingBoxLoader, SyncLoader } from 'react-spinners';

import './spinner.css';

const Spinner = ({isVisible, spinnerType}) =>
    <div className={(isVisible ? 'spinner__visible' : 'spinner__hidden') + ' spinner'}>
        {spinnerType === 'loading' ? <ClimbingBoxLoader/> : <SyncLoader/>}
    </div>;

Spinner.propTypes = {
    isVisible: PropTypes.bool,
    spinnerType: PropTypes.string
};

export default Spinner;