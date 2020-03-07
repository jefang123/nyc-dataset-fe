import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from './logo.svg';

class Home extends Component {
  state = {};
  componentDidMount = () =>
    fetch('/api' + this.props.location.search)
      .then(res => res.json())
      .then(data => {
        const { domain, ...datasets } = data
        this.setState({ datasets,domain })
      })

  render() {
    const { datasets, domain } = this.state;
    const links = datasets ? Object.keys(datasets).map(dataset => 
      <React.Fragment key={dataset}>
        <Link to={`/${domain}/${dataset}`}>{datasets[dataset]}</Link>
        {/* <br/> */}
      </React.Fragment>
    ) : null
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
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