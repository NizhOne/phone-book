import React from 'react';
import './table.css';
import TableRow from '../Table-row';
import Search from '../Search'
import PropTypes from 'prop-types';

class TableComponent extends React.Component{
    componentDidMount() {
        this.props.fetchContacts('tableData')
    }

    render() {
        const Table = (
            this.props.tableData.map((item) => {
                return <TableRow key={item.id}
                                 rowData={ item }
                                 editItem={ () => this.props.editItem(item.id) }
                                 deleteItem={ () => this.props.deleteItem(item.id) }
                />
            })
        );
        return (
            <div className={`table-wrapper`}>
                <Search/>
                <TableRow isHeader={ true } rowData={{name: 'Name', phoneNumber: 'Phone number', email: 'Email'}}/>
                { Table }
            </div>
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