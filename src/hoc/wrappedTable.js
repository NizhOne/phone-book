import React from 'react';

const wrappedTable = (BaseComponent) => class extends React.Component {
    componentDidMount() {
        this.props.fetchContacts('tableData');
    }

    render() {
        return <BaseComponent {...this.props}/>;
    }
};

export default wrappedTable;