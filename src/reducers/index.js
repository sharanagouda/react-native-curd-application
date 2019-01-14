import { combineReducers } from 'redux';

import dataReducer from "./appReducer"

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer: dataReducer
})

export default rootReducer;