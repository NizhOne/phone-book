import React from 'react';
import Form from './Form.jsx';
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

const generateWrapper = (passedProps) => {
    const props = {
        ...passedProps
    }

    return shallow(<Form {...passedProps}/>)
}

// test('test', () => {
//     const component = renderer.create(
//         <Form formData={{name: '123', email: '123', phoneNumber: '123'}} isEdit={true}/>
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });

describe('Form', () => {
    it('tests', () => {
        const wrapper = generateWrapper({formData: {
            name: '',
                email:'',
                phoneNumber: ''
            }});
        expect(wrapper.find('.add-contact-form')).toHaveLength(1)
    });
});





