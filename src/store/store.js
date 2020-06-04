import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const configureStore = (preloadedState = {}) => {
  return createStore(
    preloadedState,
    applyMiddleware(...middlewares));
};

export default configureStore;