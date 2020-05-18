import { API_URL } from "../constants";

export const fetchDatasetInfo = (id) => {
  fetch(`${API_URL}/info/${id}`)
  .then(res => res.json())
}

export const fetchDataset = (id) => {
  fetch(`${API_URL}/api/${id}`)
  .then(res => res.json())
}

export const queryDataset = (id) => {
  fetch(`${API_URL}/api/${id}`)
  .then(res => res.json())
}