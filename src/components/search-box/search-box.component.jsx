import { Component } from 'react';
import './search-box.css';

class SearchBox extends Component {

    render() {
        const {onSearchChangeHandler, placeholder, className} = this.props;
        return (
            <div>
                <input 
                className={`search-box ${className}`}
                type="search" 
                placeholder={placeholder}
                onChange={onSearchChangeHandler}
                />
            </div>
        )
    }
}

export default SearchBox;