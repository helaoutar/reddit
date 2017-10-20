import React from 'react';
import Divider from './Divider';

const SubredditLink = ({ name, isSelected, separate, onClick }) => (
    (
        <span>
            <li onClick={onClick} className={isSelected ? "active" : ""}>{name}</li>
            {separate ? <Divider /> : null}
        </span>
    )
);

export default SubredditLink;