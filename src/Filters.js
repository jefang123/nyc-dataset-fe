import React, { Component } from 'react';
import logo from './logo.svg';
import { Info } from './Info.js';


class Dataset extends Component {
  state = {};
  // onSubmit = () => 
  //   fetch(`/api/${this.props.match.params.dataset}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     let { dataset_name, total, columns } = data
  //     this.setState({dataset_name, count:total, columns})
  //   })

  render() {
    const { dataset_name, count, columns } = this.state;
    return (
      <>
      </>
    )
  }
}

export default Dataset;