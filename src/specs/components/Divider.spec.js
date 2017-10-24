import React from 'react';
import { shallow } from 'enzyme';
import Divider from '../../components/LeftPanel/SubredditLink/Divider';

describe('Divider component', () => {
    it('should render a divider', () => {
        const wrapper = shallow(<Divider />);
        expect(wrapper.find('.divider').exists()).toBe(true);
    });
});