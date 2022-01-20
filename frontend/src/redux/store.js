import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import mainReducer from './reducers';

const middleware = [thunk];

const store = createStore(mainReducer, applyMiddleware(...middleware));

export default store;
