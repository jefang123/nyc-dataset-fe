import { connect } from 'react-redux';
import Dataset from '../Dataset';
import { fetchQuery } from '../../actions/query_actions';

const msp = (state, ownProps) => {
  return {
    dataset: state.entities.dataset
  };
}

const mdp = dispatch => {
  return {
    fetchDataset: id => dispatch(fetchQuery(id)),
  }
}

export default connect(msp, mdp)(Dataset);