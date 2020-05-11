import React, { Component } from 'react';

const defaultState = {}

class Dataset extends Component {
  state = defaultState;

  onChange = (key, value) => 
    this.setState({key:value})

  onSubmit = () => 
    fetch(`/api/${this.props.match.params.dataset}`, json=this.state)
    .then(res => res.json())
    .then(data => {
      let { dataset_name, total, columns } = data
      this.setState({dataset_name, count:total, columns})
    })

  render() {
    const { dataset_name, count, columns } = this.state;
    const Map = Object.keys(defaultState).map(key) =>
      <>
        <Input></Input>
        <Button></Button>
      </>
    return (
      {Map}
    )
  }
}

export default Dataset;