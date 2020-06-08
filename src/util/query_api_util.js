import { API_URL } from "../constants";

// fetch simple metadata of given dataset
export const fetchDatasetInfo = (id) => {
  fetch(`${API_URL}/info/${id}`)
  .then(res => res.json())
}

// fetch extended metadata of given dataset
export const fetchMetadata = (id) => {
  fetch(`${API_URL}/metadata/${id}`)
  .then(res => res.json())
}

// fetch initial dataset
export const fetchDataset = () => {
  fetch(`${API_URL}/api/`)
  .then(res => res.json())
}

// queries given dataset
export const queryDataset = (id, offset=0) => {
  fetch(`${API_URL}/api/${id}?o=${offset}`)
  .then(res => res.json())
}