import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    data: state.data,
    status: state.status,
    arr:state.arr
  }
}

const App = connect(mapStateToProps, actionCreators)(Main);

export default App;
