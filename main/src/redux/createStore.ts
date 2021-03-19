import { createStore, combineReducers } from 'redux'
import { userReducer } from './reducers/user'

// Define the Reducers that will always be present in the application
const staticReducers = {
  user: userReducer,
}

// Configure the store
export default function configureStore(initialState) {
  const store = createStore(createReducer(), initialState)

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {}

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }

  // Return the modified store
  return store
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  })
}