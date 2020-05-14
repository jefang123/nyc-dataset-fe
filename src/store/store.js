import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const configureStore = (preloadedState = {}) => {
  return createStore(
    preloadedState,
    applyMiddleware(...middlewares));
};

export default configureStore;