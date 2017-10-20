import * as actions from '../../src/actions';

describe('the action: ', () => {
    const subredditMock = 'askReddit';

    describe('`select subreddit` ', () => {
        it('should return an action with a subreddit and the type SELECT_SUBREDDIT.', () => {
            expect(actions.selectSubreddit(subredditMock)).toEqual({
                type: actions.SELECT_SUBREDDIT,
                subreddit: subredditMock
            });
        });
    });

    describe('`invalidate subreddit` ', () => {
        it('should return an action with a subreddit and the type INVALIDATE_SUBREDDIT.', () => {
            expect(actions.invalidateSubreddit(subredditMock)).toEqual({
                type: actions.INVALIDATE_SUBREDDIT,
                subreddit: subredditMock
            });
        });
    });

    describe('`request posts` ', () => {
        it('should return an action with a subreddit and the type REQUEST_POSTS.', () => {
            expect(actions.requestPosts(subredditMock)).toEqual({
                type: actions.REQUEST_POSTS,
                subreddit: subredditMock
            });
        });
    });

    describe('`receive posts` ', () => {
        it('should return an action with a subreddit and the type RECEIVE_POSTS and the received posts.', () => {
            
        });
    });
});