import React from 'react';
import Table from './components/Table';
import Form from './components/Form';
import {connect} from 'react-redux';

const App = ({isEdit}) =>
    isEdit ?
        <Form/> :
        <div>
            <Table/>
            <Form/>
        </div>;

const mapStateToProps = state => ({isEdit: state.editData});

export default connect(mapStateToProps)(App);
