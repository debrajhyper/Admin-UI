import React from 'react'

const SearchUser = ({ searchResult, setSearchResult }) => {

    //  Method to set the search text entered by the user to the state using the setSearchResult() method.
    const searchHandler = event => {
        setSearchResult(event.target.value);
    };

    return (
        <input 
        type="text" 
        placeholder="Search"
        className="float-right outline-none border-2 rounded pl-2 px-1 md:px-2 py-1 hover:border-blue-light focus:border-blue-light" 
        value={searchResult}
        onChange={searchHandler} 
        />
    )
}

export default SearchUser
