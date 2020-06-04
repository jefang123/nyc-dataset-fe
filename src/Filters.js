import React, { Component } from 'react';

const defaultState = {}

class Filters extends Component {
  state = defaultState;

  onChange = (value) => 
    this.setState({key:value})

  onSubmit = () => 
    // this.props.fetchQuery(this.props.match.params.dataset, this.state)
    fetch(`/api/${this.props.match.params.dataset}`, json=this.state)
    .then(res => res.json())
    .then(data => {
      let { dataset_name, total, columns } = data
      this.setState({dataset_name, count:total, columns})
    })

  render() {
    const { dataset_name, count, columns } = this.state;
    const Map = Object.keys(defaultState).map((key) =>
      <div>
        <Input></Input>
        <Button onSubmit={()=>onSubmit()}></Button>
      </div>
    )
    return (
      {Map}
    )
  }
}

export default Filters;