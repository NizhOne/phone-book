import React from 'react';
import PropTypes from 'prop-types';

import './table-row.css';

const TableRow = ({rowData, isHeader, deleteItem, editItem}) => {
    const buttons = isHeader ?
        null :
        <div>
            <button className={`table-row__button`} onClick={ (e, id) => {e.preventDefault(); deleteItem(id)} }>delete</button>
            <button className={`table-row__button`} onClick={ (e, id) => {e.preventDefault(); editItem(id)} }>edit</button>
        </div>;
    return (
        <div className={`table-row`}>
            <div className={`table-row__determining`}>
                {buttons}
                <span className={`table-row__determining_main`}>{rowData.name}</span>&nbsp;
            </div>
            <div className={`table-row__values`}>
                <div className={`table-row__values_value`}>{rowData.phoneNumber}</div>
                <div className={`table-row__values_value`}>{rowData.email}</div>
            </div>
        </div>
    );
};

TableRow.propTypes = {
    rowData: PropTypes.object.isRequired,
    isHeader: PropTypes.bool,
    deleteItem: PropTypes.func,
    editItem: PropTypes.func
};

export default TableRow