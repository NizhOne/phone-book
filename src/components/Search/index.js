import { connect } from 'react-redux';
import SearchComponent from './Search';
import { search } from '../../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (searchString) => {
            dispatch(search(searchString))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        searchString: state.searchContacts
    }
};

const Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchComponent);

export default Search;