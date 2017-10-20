import SubredditLink from './SubredditLink';
import React from 'react';
import './style.css';

const LeftPanel = ({subreddits, onClick}) => (
    <div class="left-panel">
        <div class="icon">
            <img src="./icon.png" />
        </div>
        <ul class="subreddits">
            {subreddits.map((subreddit) => <SubredditLink key={subreddit.name} {...subreddit} onClick={() => onClick(subreddit.name)} />)}
        </ul>
    </div>
);

export default LeftPanel;