import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Header } from "./components/Header";
import { MainGrid } from "./components/Container";

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
      <MainGrid>
        <Header>
          NYC Datasets
        </Header>
      <div className="main">
        {links}
      </div>
    </MainGrid> : "nothing here"
    );
  }
}

export default Home;