import React from 'react';
import Table from '../components/Table';
import Form from '../components/Form';
import Spinner from '../components/Spinner/Spinner';

const App = ({isEdit}) => isEdit ?
        <Form /> :
        <div>
            <Spinner isVisible={true} spinnerType={'loading'} />
            <Table />
            <Form />
        </div>;

export default App;



