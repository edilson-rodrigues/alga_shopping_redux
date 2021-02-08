import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';

import './index.css';
import HomeView from './views/Home.view'
import {store, persistedStore} from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistedStore}>
            <React.StrictMode>
                <HomeView/>
            </React.StrictMode>
        </PersistGate>
    </Provider>
    ,
    document.getElementById('root')
);

