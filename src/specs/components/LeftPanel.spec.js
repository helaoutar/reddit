import React from 'react';
import { shallow } from 'enzyme';
import LeftPanel from '../../components/LeftPanel';
import SubredditLink from '../../components/LeftPanel/SubredditLink';

describe('LeftPanel component', () => {
    it('render as much link as subreddit.', () => {
        const props = {
            subreddits: []
        };
        const wrapper = shallow(<LeftPanel {...props}/>);
        expect(wrapper.find(SubredditLink)).toHaveLength(0);
    });
});