import React from 'react';
import TableRow from './TableRow';
import renderer from 'react-test-renderer';


test('test', () => {
    const component = renderer.create(
        <TableRow rowData={{}} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});