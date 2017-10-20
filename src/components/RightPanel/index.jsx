import Thread from './Thread';
import './style.css';

const RightPanel = ({selectedSubreddit, threads}) => (
    <div class="right-panel">
        <h1 class="title">
            {selectedSubreddit}
        </h1>
        <ul class="threads">
            {threads.map(thread => <Thread key={thread.id} {...thread}/>)}
        </ul>
    </div>
);

export default RightPanel;