const Thread = ({
    title,
    likes,
    op,
    comments,
    url
}) => (
    <li>
        <a href={url}>
            <span class="thread-title">{title}</span>
            <span class="thread-below">
                <span>{likes} pts</span>
                <span>by {op}</span>
                <span>{comments} comments</span>
            </span>
        </a>
    </li>
);

export default Thread;