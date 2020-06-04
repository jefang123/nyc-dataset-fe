import { connect } from 'react-redux';
import Home from '../Home';
import { fetchDataset } from '../../actions/query_actions';

const msp = (state, ownProps) => {
  return {
    dataset: state.entities.dataset
  };
}

const mdp = dispatch => {
  return {
    fetchDataset: () => dispatch(fetchDataset()),
  }
}

export default connect(msp, mdp)(Home);