import React from 'react';
import Table from './components/Table';
import Form from './components/Form';
import { connect } from 'react-redux';

let App = ({isEdit}) => {
    return (
        isEdit ?
            <Form/>:
            <div>
                <Table/>
                <Form/>
            </div>
    )
};

const mapStateToProps = (state) => {
   return {
       isEdit : state.editData
   }
};

App = connect(mapStateToProps)(App);
export default App;

