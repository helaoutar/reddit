import Thread from './Thread';
import React from 'react';
import reload from '../../reload.png';
import './style.css';

const RightPanel = ({ selectedSubreddit, threads, onReload}) => (
    <div className="right-panel">
        <div>
            <button onClick={() => onReload(selectedSubreddit)} className="reload"><img src={reload} alt="" width="30" height="30" /></button>
            <h1 className="title">
                {selectedSubreddit}
            </h1>
        </div>
        <ul className="threads">
            {threads.map(thread => <Thread key={thread.id} {...thread} />)}
        </ul>
    </div>
);

export default RightPanel;