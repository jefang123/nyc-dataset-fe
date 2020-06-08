/* Component to server queried data */

import React, { Component } from 'react';
import { Results } from './Results';
import { Container } from './components/Container';


class Dataset extends Component {
  state = {dataset_name:"test_dataset", count: 555, loading:true};
  componentDidMount = () =>
    this.props.fetchQuery(this.props.match.params.dataset)

  render() {
    const data = this.state;
    let results = <Results results={data}/>

    return (
      <Container>
        {/* <p>Current dataset is {dataset_name}</p>
        <p>Dataset count {count}</p> */}
        {results}
      </Container>
    );
  }
}

export default Dataset;