import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import GlobalRoute from './component/routes/GlobalRoute';
import store from './store/store';

import './style/index.css';

ReactDOM.render(
    <Provider store = {store}>
        <GlobalRoute/>
    </Provider>
, document.getElementById('root')
);
registerServiceWorker();
