import { connect } from 'react-redux';
import Filters from '../Filters';
import { fetchQuery } from '../../actions/query_actions';

const mdp = dispatch => {
  return {
    fetchDataset: id => dispatch(fetchQuery(id, params)),
  }
}

export default connect(null, mdp)(Filters);