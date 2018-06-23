import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import GlobalRoute from './component/routes/GlobalRoute';
import store from './store/store';
import moment from 'moment';
import 'moment/locale/zh-cn';

import './style/index.css';

//日期语言设为中文（全局）
moment.locale('zh-cn');
ReactDOM.render(
    <Provider store = {store}>
        <GlobalRoute/>
    </Provider>
, document.getElementById('root')
);
registerServiceWorker();
