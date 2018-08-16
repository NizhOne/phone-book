import React from 'react';
import './search.css';
import PropTypes from 'prop-types';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.searchString
        }
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        }, () => this.props.onSearchChange(this.state.value));
    };

    render() {
        return (
            <div className={`search`}>
                <input className={`search__input`} placeholder={'Search'} onChange={this.handleChange} value={this.state.value} type={`search`}/>
                <div className={`clickable`}/>
            </div>
        );
    }
}

SearchComponent.propTypes = {
    onChange: PropTypes.func
};

export default SearchComponent;