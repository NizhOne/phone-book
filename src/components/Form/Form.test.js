import React from 'react';
import Form from './Form';
import renderer from 'react-test-renderer';


test('test', () => {
    const component = renderer.create(
        <Form formData={{name: '123', email: '123', phoneNumber: '123'}} isEdit={true}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});