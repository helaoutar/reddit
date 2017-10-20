import { connect } from 'react-redux';
import RightPanel from '../../components/RightPanel';
import * as actions from '../../actions';

const getThreadsFromSubreddit = state => {
    return state.postsBySubreddit[state.selectedSubreddit].items.map(post => ({
        title: post.title,
        likes: post.ups,
        op: post.author,
        comments: post.num_comments,
        url: post.url,
        id: post.id
    }));
};

const mapStateToProps = state => ({
    threads: getThreadsFromSubreddit(state),
    selectedSubreddit: state.selectedSubreddit
});

const mapDispatchToProps = dispatch => ({
    onReload: (subreddit) => {
        dispatch(actions.invalidateSubreddit(subreddit));
        dispatch(actions.getSubredditThreads(subreddit));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RightPanel);