import React from 'react';

const Thread = ({
    title,
    likes,
    op,
    comments,
    url
}) => (
    <li>
        <a href={url}>
            <span className="thread-title">{title}</span>
            <span className="thread-below">
                <span>{likes} pts</span>
                <span>by {op}</span>
                <span>{comments} comments</span>
            </span>
        </a>
    </li>
);

export default Thread;