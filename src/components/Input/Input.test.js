import React from 'react';
import Input from './Input';
import renderer from 'react-test-renderer';


test('test', () => {
    const component = renderer.create(
        <Input onChange={() => true} value={'hello'} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});