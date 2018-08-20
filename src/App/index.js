import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = state => ({isEdit: state.editData});

export default connect(mapStateToProps)(App);