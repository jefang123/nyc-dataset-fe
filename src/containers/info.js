import { connect } from 'react-redux';
import Info from '../Info';
import { fetchInfo } from '../../actions/query_actions';

const msp = (state, ownProps) => {
  return {
    info: state.entities.Info
  };
}

const mdp = dispatch => {
  return {
    fetchInfo: () => dispatch(fetchInfo()),
  }
}

export default connect(msp, mdp)(Info);