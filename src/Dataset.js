import React, { Component } from 'react';
import logo from './logo.svg';
import { Info } from './Info.js';

class Dataset extends Component {
  state = {dataset_name:"test_dataset", count: 555};
  componentDidMount = () => {
    this.props.fetchInfo(this.props.match.params.dataset)
  }
  // onSubmit = () => 
  //   fetch(`/api/${this.props.match.params.dataset}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     let { dataset_name, total, columns } = data
  //     this.setState({dataset_name, count:total, columns})
  //   })

  render() {
    const { dataset_name, count, columns } = this.state;
    let info = <Info columns={columns}/>;
    return (
      <div className="App">
        <p>Current dataset is {dataset_name}</p>
        <p>Dataset count {count}</p>
        {info}
      </div>
    );
  }
}

export default Dataset;