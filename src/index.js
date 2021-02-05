import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import './index.css';
import HomeView from './views/Home.view'
import store from './Store/store'

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <HomeView/>
        </React.StrictMode>
    </Provider>
    ,
    document.getElementById('root')
);

