import {createStore} from 'redux';
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

import rootReducer from "./reducers/reducers";


const persistedReducer = persistReducer({
    key: 'root',
    storage
}, rootReducer);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);
