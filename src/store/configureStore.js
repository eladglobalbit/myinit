import { createStore, combineReducers,compose } from 'redux';

import authReducer from './reducers/auth';

const rootReducer = combineReducers({
    places: authReducer
});

let composeEnhacers = compose;

if(__DEV__){
    composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer,composeEnhacers());
};

export default configureStore;