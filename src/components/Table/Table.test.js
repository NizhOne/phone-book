import React from 'react';
import TableComponent from './Table';
import renderer from 'react-test-renderer';


test('test', () => {
    const component = renderer.create(
        <TableComponent tableData={[]} editItem={() => true} deleteItem={() => true} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});