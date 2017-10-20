import React from 'react';
import Subreddits from '../Subreddits';
import Threads from '../Threads';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(actions.getSubredditThreads(this.props.selectedSubreddit));
    }

    render() {
        return (
            <div>
                <Subreddits />
                <Threads />
            </div>
        )
    }
}

const mapStateToPropos = state => ({selectedSubreddit: state.selectedSubreddit});
const mapDispathToProps = dispatch => ({dispatch});

export default connect(mapStateToPropos, mapDispathToProps)(App);