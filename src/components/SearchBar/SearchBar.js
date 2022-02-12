import React, { useState } from 'react';
import './SearchBar.css'

function SearchBar() {

    const [query, setQuery] = useState("Search domains or roles")

    function handleChange(event) {
        setQuery(event.target.value);

        // search: search local json or API call
        // populate n result components and re-render
    }    

    return (
        <div>
            <input type="search" className="text-search" onChange={handleChange}></input>

        </div>
    );
}

export default SearchBar;