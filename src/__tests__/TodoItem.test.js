import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoItem from '../components/TodoItem';    

Enzyme.configure({ adapter: new Adapter() });

describe('TodoItemTest', () => {
    const props = {
        todo: {
            id: 123123,
            name: 'TestName123',
            complete: false
        },
    };

    it("should render", () => {
        shallow(<TodoItem {...props}/>);
    });

    const wrapper = mount(<TodoItem {...props}/>);
    const name = wrapper.find(".todoItem")

    it("should have correct name", () => {
        expect(name.text()).toBe("TestName123");
    });



    // const testRemove = jest.fn();
    // const iconRemove = wrapper.find(".iconRemove")

    // it('Clicking delete calls the correct function', () => {
    //     iconRemove.simulate('click');
    //     expect(testRemove).toHaveBeenCalled();
    // });

});