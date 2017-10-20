import React from 'react';

const SubredditLink = ({name, isSelected, onClick}) => (
     (<li onClick={onClick} className={isSelected ? "active" : ""}>{name}</li>)
);

export default SubredditLink;