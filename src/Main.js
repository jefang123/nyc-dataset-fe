/* Grid Component */

import React, { Component } from 'react';
import { Header } from "./components/Header";
import { Dataset } from "./Dataset";
import { MainGrid } from "./components/Container";
// import { Metadata } from "./Metadata";

class Main extends Component {
  state = {};
  componentDidMount = () =>
    this.props.fetchQuery(this.props.match.params.dataset)

  render() {
    return (
      <MainGrid>     {/* main-grid */}
        <Header/>     {/* header */} 
        {/* <Metadata/>   sidebar */}
        <Dataset/>    {/* main */}
      </MainGrid>
    );
  }
}

export default Main;