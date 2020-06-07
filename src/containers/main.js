import { connect } from 'react-redux';
import Main from '../Main';
import { fetchQuery } from '../../actions/query_actions';

const msp = (state, ownProps) => {
  return {
    dataset: state.entities.dataset
  };
}

const mdp = dispatch => {
  return {
    fetchQuery: id => dispatch(fetchQuery(id)),
  }
}

export default connect(msp, mdp)(Main);