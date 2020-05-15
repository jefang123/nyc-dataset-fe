import { RECEIVE_DATASET, RECEIVE_INFO, RECEIVE_QUERY } from '../actions/query_actions';
import { merge } from 'lodash';

export default (state={}, action) => {
  const data = action.dataset
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DATASET:
      const newState = merge({}, state)
      return newState
    case RECEIVE_INFO:
      return state
    case RECEIVE_QUERY:
      return state      
    default:
      return state;
  }
};
