import React, { Component } from 'react';
import { Info } from './Info.js';
import { Container } from './components/Container';

class Dataset extends Component {
  state = {dataset_name:"test_dataset", count: 555};
  componentDidMount = () => {
    this.props.fetchInfo(this.props.match.params.dataset)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.dataset !== prevProps.match.params.dataset) {
      let { dataset_name, total, columns } = this.props
      this.setState({
        dataset_name,
        total,
        columns
      })
    }
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
      <Container>
        <p>Current dataset is {dataset_name}</p>
        <p>Dataset count {count}</p>
        {info}
      </Container>
    );
  }
}

export default Dataset;