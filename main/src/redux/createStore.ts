import { combineReducers, createStore, compose } from 'redux';
import reducers from './reducers';

/**
 * Cf. redux docs:
 * https://redux.js.org/recipes/code-splitting/#defining-an-injectreducer-function
 */
export default function configureStore() {
    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : compose;

    const enhancer = composeEnhancers();
    const store = createStore(createReducer(), enhancer);

    store.asyncReducers = {};

    store.injectReducer = (key, asyncReducer) => {
        store.asyncReducers[key] = asyncReducer;
        store.replaceReducer(createReducer(store.asyncReducers));
    };

    return store;
}

function createReducer(asyncReducers) {
    return combineReducers({
        ...reducers,
        ...asyncReducers,
    });
}

export const store = configureStore();
