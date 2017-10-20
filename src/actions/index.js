export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

export const REQUEST_POSTS = 'REQUEST_POSTS';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const selectSubreddit = subreddit => ({ type: SELECT_SUBREDDIT, subreddit });

export const invalidateSubreddit = subreddit => ({ type: INVALIDATE_SUBREDDIT, subreddit });

export const requestPosts = subreddit => ({ type: REQUEST_POSTS, subreddit });

export const receivePosts = (subreddit, posts) => (
    {
        type: RECEIVE_POSTS,
        subreddit,
        posts: posts.data.children.map(child => child.data)
    }
);

export const getSubredditThreads = subreddit => (dispatch, getState) => {
    if (fetchIfNeeded(getState())) {
        dispatch(requestPosts(subreddit));
        fetch(`https://www.reddit.com/r/${subreddit}.json`).then(response => response.json()).then(posts => {
            dispatch(receivePosts(subreddit, posts));
        });
    }
};

export const fetchIfNeeded = state => {
    const posts = state.postsBySubreddit[state.selectedSubreddit];
    if (!posts) {
        return true;
    } else if (posts.isFetching) {
        return false;
    } else {
        return posts.didInvalidate;
    }
};