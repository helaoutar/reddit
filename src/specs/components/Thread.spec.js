import React from 'react';
import { shallow } from 'enzyme';
import Thread from '../../components/RightPanel/Thread';

describe('Thread component', () => {
    const props = {
        title: 'yes?',
        likes: 60,
        op: 'original poster',
        comments: 0,
        url: 'localhost'
    };

    it('should render a <li />', () => {
        const wrapper = shallow(<Thread {...props} />);
        expect(wrapper.is('li')).toBe(true);
    });
});