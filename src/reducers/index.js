import { combineReducers } from 'redux';

import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from '../actions';

const selectedSubreddit = (state = 'all', action) => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
};


const posts = (
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return { ...state, didInvalidate: true };
        case REQUEST_POSTS:
            return { ...state, isFetching: true, didInvalidate: false };
        case RECEIVE_POSTS:
            return {
                ...state,
                didInvalidate: false,
                isFetching: false,
                items: action.posts
            };
        default:
            return state;
    }
};


const postsBySubreddit = (state = {
    all: {
        isFetching: false,
        didInvalidate: true,
        items: [],
        separate: true
    },
    frontend: {
        isFetching: false,
        didInvalidate: true,
        items: []
    },
    reactjs: {
        isFetching: false,
        didInvalidate: true,
        items: []
    },
    askreddit: {
        isFetching: false,
        didInvalidate: true,
        items: []
    },
    jokes: {
        isFetching: false,
        didInvalidate: true,
        items: []
    }
}, action) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
            return { ...state, [action.subreddit]: posts(state[action.subreddit], action) };
        default:
            return state;
    }
};

const reducer = combineReducers({
    selectedSubreddit,
    postsBySubreddit
});

export default reducer;