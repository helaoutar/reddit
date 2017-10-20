import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import app from './reducers';
import Subreddits from './containers/Subreddits';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(app, applyMiddleware(thunkMiddleware));

ReactDOM.render((<Provider store={store}>
    <Subreddits />
</Provider>), document.getElementById('root'));
registerServiceWorker();
