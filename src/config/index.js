import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from "redux-persist";
import reducers from '../reducers'; //Import the reducer
import promise from "redux-promise";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:"root",
    storage,
    whiteList:[],
    blacklist:[]
}
const persistedReducer = persistReducer(persistConfig,reducers);

export default ()=>{
    let store = createStore(persistedReducer, {}, applyMiddleware(thunk, promise));
    let persistor = persistStore(store);
    return {store,persistor};
}
// Connect our store to the reducers
//export default createStore(reducers, applyMiddleware(thunk));