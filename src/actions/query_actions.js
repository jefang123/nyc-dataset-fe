import * as APIQuery from '../util/query_api_util';

export const RECEIVE_DATASET = 'RECEIVE_DATASET';
export const RECEIVE_INFO = 'RECEIVE_INFO';
export const RECEIVE_QUERY = 'RECEIVE_QUERY';
export const RECEIVE_METADATA = 'RECEIVE_METADATA';


export const receiveDataset = dataset => {
  return {
    type: RECEIVE_DATASET,
    dataset
  }
}

export const receiveInfo = dataset => {
  return {
    type: RECEIVE_INFO,
    dataset
  }
}

export const receiveQuery = dataset => {
  return {
    type: RECEIVE_QUERY,
    dataset
  }
}

export const receiveMetadata = dataset => {
  return {
    type: RECEIVE_METADATA,
    dataset
  }
}

export const fetchDataset = () => {
  return dispatch => {
    return APIQuery.fetchDataset().then(
      data => {
        return dispatch(receiveDataset(data))
      }
    )
  }
}

export const fetchInfo = (dataset) => {
  return dispatch => {
    return APIQuery.fetchDatasetInfo(dataset).then(
      data => {
        return dispatch(receiveInfo(data))
      }
    )
  }
}

export const fetchQuery = (dataset) => {
  return dispatch => {
    return APIQuery.fetchQuery(dataset).then(
      data => {
        return dispatch(receiveQuery(data))
      }
    )
  }
}

export const fetchMetadat = (dataset) => {
  return dispatch => {
    return APIQuery.fetchMetadata(dataset).then(
      data => {
        return dispatch(receiveMetadata(data))
      }
    )
  }
}