import React from 'react';

const wrappedTable = (BaseComponent) => {
    class HOC extends React.Component {
        componentDidMount() {
            this.props.fetchContacts('tableData');
        }
        render() {
            return <BaseComponent {...this.props}/>
        }
    }
    return HOC
};

export default wrappedTable