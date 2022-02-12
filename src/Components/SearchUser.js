import React from 'react'

const SearchUser = ({ searchResult, setSearchResult }) => {

    //  Method to set the search text entered by the user to the state using the setSearchResult() method.
    const searchHandler = event => {
        setSearchResult(event.target.value);
    };

    return (
        <input 
        data-testid="search-user"
        type="text" 
        placeholder="Search"
        className="float-right outline-none border-2 dark:border-gray-700 rounded pl-2 px-1 md:px-2 py-1 dark:bg-gray-800 hover:border-blue-light dark:hover:border-blue-dark focus:border-blue-light dark:focus:border-blue-dark" 
        value={searchResult}
        onChange={searchHandler} 
        />
    )
}

export default SearchUser
