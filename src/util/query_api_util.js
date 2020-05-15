export const fetchDatasetInfo = () => {
  fetch(`/info/${this.props.match.params.dataset}`)
  .then(res => res.json())
}

export const fetchDataset = () => {
  fetch(`/api/${this.props.match.params.dataset}`)
  .then(res => res.json())
}

export const queryDataset = () => {
  fetch(`/api/${this.props.match.params.dataset}`)
  .then(res => res.json())
}