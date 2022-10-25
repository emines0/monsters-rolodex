
import './search-box.css';

const SearchBox = ({onSearchChangeHandler, placeholder, className}) => (

            <div>
                <input 
                className={`search-box ${className}`}
                type="search" 
                placeholder={placeholder}
                onChange={onSearchChangeHandler}
                />
            </div>

        );

export default SearchBox;