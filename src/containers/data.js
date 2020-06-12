import { connect } from 'react-redux';
import Data from '../Data';
import { fetchQuery } from '../../actions/query_actions';

const msp = (state, ownProps) => {
  return {
    results: state.entities.dataset
  };
}

const mdp = dispatch => {
  return {
    fetchQuery: id => dispatch(fetchQuery(id)),
  }
}

export default connect(msp, mdp)(Data);