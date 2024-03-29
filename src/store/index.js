import { createStore, compose } from 'redux';
import defaultState from './defaultState';
import rootReducer from '../reducers';

/**
 * Configuration of the Redux store.
 *
 */
// Including Redux dev tools for the browser.
const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Including the middleware.
const enhancer = composeEnhancers();

// Configure store with the data from the default state and local storage. Inject middleware.
let store = createStore(rootReducer, defaultState, enhancer);

export default store;
