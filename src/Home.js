import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container } from './components/Container';

class Home extends Component {
  state = {}
  componentDidMount = () =>
    this.props.fetchDataset()

  render() {
    let { datasets, domain } = this.props.dataset;
    const links = datasets ? Object.keys(datasets).map(dataset => 
      <React.Fragment key={dataset}>
        <Link to={`/info/${domain}/${dataset}`}>{datasets[dataset]} Info</Link>
        <Link to={`/data/${domain}/${dataset}`}>{datasets[dataset]} Query</Link>
      </React.Fragment>
    ) : null
    return ( datasets ? 
      <Container>
        <p className="App-intro">
          NYC Datasets
        </p>
        <div className="f">
          {links}
        </div>
      </Container> : "nothing here"
    );
  }
}

export default Home;