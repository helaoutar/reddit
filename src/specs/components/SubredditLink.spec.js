import React from 'react';
import { shallow } from 'enzyme';
import SubredditLink from '../../components/LeftPanel/SubredditLink';
import Divider from '../../components/LeftPanel/SubredditLink/Divider';

describe('SubredditLink component', () => {
    it('should have `active` class when the link is selected', () => {
        const props = {
            isSelected: true
        };

        const wrapper = shallow(<SubredditLink {...props}/>);
        expect(wrapper.find('.active')).toHaveLength(1);
    });

    it('shouldn\'t have `active` class when the link is not selected', () => {
        const props = {
            isSelected: false
        };

        const wrapper = shallow(<SubredditLink {...props}/>);
        expect(wrapper.find('.active')).toHaveLength(0);
    });

    it('should render Divider component when the prop `separate` is truthy ', () => {
        const props = {
            separate: true
        };

        const wrapper = shallow(<SubredditLink {...props}/>);
        expect(wrapper.find(Divider)).toHaveLength(1);
    });

    it('shouldn\'t render Divider component when prop `separate` is falsy', () => {
        const props = {};

        const wrapper = shallow(<SubredditLink {...props}/>);
        expect(wrapper.find(Divider)).toHaveLength(0);
    });
});