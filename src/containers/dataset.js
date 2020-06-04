import { connect } from 'react-redux';
import Dataset from '../Dataset';
import { fetchInfo } from '../../actions/query_actions';

const msp = (state, ownProps) => {
  return {
    dataset: state.entities.dataset
  };
}

const mdp = dispatch => {
  return {
    fetchInfo: id => dispatch(fetchInfo(id)),
  }
}

export default connect(msp, mdp)(Dataset);