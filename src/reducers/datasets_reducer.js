import { RECEIVE_DATASET, RECEIVE_INFO, RECEIVE_QUERY, RECEIVE_METADATA } from '../actions/query_actions';
import { merge } from 'lodash';

export default (state={}, action) => {
  const data = action.dataset
  Object.freeze(state);
  const newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_DATASET:
      console.log(action)
      const { domain, ...datasets } = data
      newState.domain = domain
      newState.datasets = datasets
      console.log(newState)
      return newState
    case RECEIVE_INFO:
      const { columns, dataset_name, total } = data
      newState.columns = columns
      newState.dataset_name = dataset_name 
      newState.total = total
      return newState
    case RECEIVE_QUERY:
      newState.results = data
      return newState 
    case RECEIVE_METADATA:
      // new endpoint data
      return newState    
    default:
      return state;
  }
};
