import { connect } from 'react-redux';
import SearchComponent from './Search';
import { search } from '../../actions';

const mapDispatchToProps = ({
    onSearchChange: search
});

const mapStateToProps = (state) => ({
    searchString: state.searchContacts
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);