import SubredditLink from './SubredditLink';
import React from 'react';
import logo from '../../icon.png';
import './style.css';

const LeftPanel = ({subreddits, onClick}) => (
    <div className="left-panel">
        <div className="icon">
            <img src={logo} alt=""/>
        </div>
        <ul className="subreddits">
            {subreddits.map((subreddit) => <SubredditLink key={subreddit.name} {...subreddit} onClick={() => onClick(subreddit.name)} />)}
        </ul>
    </div>
);

export default LeftPanel;