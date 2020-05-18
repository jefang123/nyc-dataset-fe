import { API_URL } from "../constants";

// fetch metadata of given dataset
export const fetchDatasetInfo = (id) => {
  fetch(`${API_URL}/info/${id}`)
  .then(res => res.json())
}

// fetch initial dataset
export const fetchDataset = () => {
  fetch(`${API_URL}/api/`)
  .then(res => res.json())
}

// queries given dataset
export const queryDataset = (id) => {
  fetch(`${API_URL}/api/${id}`)
  .then(res => res.json())
}