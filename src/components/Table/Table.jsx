import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '../Table-row';
import Search from '../Search'

import './table.css';

class TableComponent extends React.Component {
    componentDidMount() {
        this.props.fetchContacts('tableData')
    }

    render() {
        return (
            <div className={`table-wrapper`}>
                <Search />
                <TableRow isHeader={true} rowData={{ name: 'Name', phoneNumber: 'Phone number', email: 'Email' }} />
                {this.props.tableData.map((item) =>
                    <TableRow key={item.id}
                        rowData={item}
                        editItem={() => this.props.editItem(item.id)}
                        deleteItem={() => this.props.deleteItem(item.id)}
                    />)}
            </div >
        );
    }
}

TableComponent.propTypes = {
    tableData: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    fetchContacts: PropTypes.func
};

export default TableComponent