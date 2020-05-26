import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from './logo.svg';

class Home extends Component {
  state = {};
  componentDidMount = () =>
    this.props.fetchDataset()
    
    // fetch('/api' + this.props.location.search)
    // fetch("/api")
    //   .then(res => res.json())
    //   .then(data => {
    //     const { domain, ...datasets } = data
    //     this.setState({ datasets,domain })
    //   })

  render() {
    console.log(this.props)
    const { datasets, domain } = this.state;
    const links = datasets ? Object.keys(datasets).map(dataset => 
      <React.Fragment key={dataset}>
        <Link to={`/info/${domain}/${dataset}`}>{datasets[dataset]}</Link>
        {/* <Link to={`/data/${domain}/${dataset}`}>{datasets[dataset]</Link> */}
      </React.Fragment>
    ) : null
    return (
      <div className="App home-container">
        <p className="App-intro">
          NYC Datasets
        </p>
        <div className="f">
          {links}
        </div>
      </div>
    );
  }
}

export default Home;