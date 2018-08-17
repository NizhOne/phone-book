import React from 'react';
import Search from './Search';
import renderer from 'react-test-renderer';


test('test', () => {
    const component = renderer.create(
        <Search onSearchChange={() => true} value={'hello'} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});