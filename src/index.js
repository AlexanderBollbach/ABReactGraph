import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import data from './data';
ReactDOM.render(<App datasets={data}/>, document.getElementById('root'));
registerServiceWorker();
