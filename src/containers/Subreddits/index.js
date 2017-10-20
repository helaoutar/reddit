import { connect } from 'react-redux';
import LeftPanel from '../../components/LeftPanel';
import * as actions from '../../actions';

const mapStateToProps = state => ({
    subreddits: Object.keys(state.postsBySubreddit).map(subreddit => ({
            name: subreddit,
            isSelected: (subreddit === state.selectedSubreddit),
            separate: state.postsBySubreddit[subreddit].separate
        })
    )
});

const mapDispatchToProps = dispatch => ({
    onClick: (subreddit) => {
        dispatch(actions.selectSubreddit(subreddit));
        dispatch(actions.getSubredditThreads(subreddit));
    }
});

const Subreddits = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftPanel);

export default Subreddits;