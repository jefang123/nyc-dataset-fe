import { RECEIVE_DATASET, RECEIVE_INFO, RECEIVE_QUERY } from '../actions/query_actions';
import { merge } from 'lodash';

export default (state={}, action) => {
  const data = action.dataset
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DATASET:
      const newState = merge({}, state)
      const { domain, ...datasets } = data
      newState.domain = domain
      newState.datasets = datasets
      return newState
    case RECEIVE_INFO:
      const state = merge({}, state)
      const { columns, dataset_name, total } = data
      state.columns = columns
      state.dataset_name = dataset_name 
      state.total = total
      return state
    case RECEIVE_QUERY:
      const state = merge({}, state)
      state.results = data
      return state      
    default:
      return state;
  }
};
