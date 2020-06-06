/* Component for Dataset Metadata */

import React, { Component } from 'react';

class Metadata extends Component {
  state = {};
  componentDidMount = () =>
    this.props.fetchQuery(this.props.match.params.dataset)

  render() {
    const { dataset_name, total, last_updated } = this.state;
    return (
      <aside>
        <p>{dataset_name}</p>
        <p>Total rows: {total}</p>
        <p>Last updated: {last_updated}</p>
      </aside>
    );
  }
}

export default Metadata;