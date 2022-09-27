import React from "react";
import PropTypes from 'prop-types';

const SearchBar = ({keyword, keywordChange}) => {
    return (
        <section className="search-bar">
            <input 
            type="text"
            placeholder="Cari bedasarkan judul...."
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)} 
            />
        </section>
    )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
}

export default SearchBar;