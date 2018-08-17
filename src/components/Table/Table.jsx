import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '../Table-row';
import Search from '../Search'

import './table.css';

const TableComponent = ({tableData, deleteItem, editItem}) =>
    <div className={`table-wrapper`}>
        <Search/>
        <TableRow isHeader={ true } rowData={{name: 'Name', phoneNumber: 'Phone number', email: 'Email'}}/>
        {
            tableData.map((item) => {
                return <TableRow key={item.id}
                                 rowData={ item }
                                 editItem={ () => editItem(item.id) }
                                 deleteItem={ () => deleteItem(item.id) }
                />
            })
        }
    </div>;

TableComponent.propTypes = {
    tableData: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
};

export default TableComponent