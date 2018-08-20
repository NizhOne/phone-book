import React from 'react';
import TableComponent from './Table.jsx';
import {shallow} from  'enzyme'
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


test('test', () => {
    const component = shallow(
        <TableComponent tableData={[]} editItem={() => true} deleteItem={() => true} />
    );
    // let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
    expect(component.find('.table-wrapper')).toHaveLength(1)
});