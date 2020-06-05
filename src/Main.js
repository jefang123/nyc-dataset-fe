/* Grid Component */

import React, { Component } from 'react';
import { Header } from "./components/Header";
import { Dataset } from "./Dataset";
// import { Metadata } from "./Metadata";

class Main extends Component {
  state = {};
  componentDidMount = () =>
    this.props.fetchQuery(this.props.match.params.dataset)

  render() {
    return (
      <Container>     {/* main-grid */}
        <Header/>     {/* header */} 
        {/* <Metadata/>   sidebar */}
        <Dataset/>    {/* main */}
      </Container>
    );
  }
}

export default Main;