/* Component to server queried data */

import React, { Component } from 'react';
import { Results } from './Results';
import { Header } from "./components/Header";
import { Metadata } from "./Metadata";
import { MainGrid } from "./components/Container";


class Dataset extends Component {
  // state = {dataset_name:"test_dataset", count: 555, loading:true};
  state = {}
  componentDidMount = () =>
    this.props.fetchQuery(this.props.match.params.dataset)

  render() {
    const results = this.props;
    let dataResults = <Results results={results}/>

    return (
      <MainGrid>
        <Header>
          NYC Datasets
        </Header>
        <Metadata/>
        {dataResults}
      </MainGrid>
    );
  }
}

export default Dataset;