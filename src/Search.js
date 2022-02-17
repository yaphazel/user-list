import React, { useState } from 'react'
import Tabs from './Tabs'

export const SearchContext = React.createContext()

const Search = () => {
    const[search, setSearch] = useState('')
    const searchWord = (e) =>{
        setSearch(e.target.value)
        return search
    }
    return (
        <div className="search-container">
            <div className="input-group">
                <div className="input-group-btn" >
                    <button className="btn btn-default"><i class="bi bi-search"></i></button>
                </div>
                <div class="col-xs-4">
                    <input type="text" class="form-control" onChange={event => {searchWord(event)}}placeholder='Search Name...' />   
                </div>
            </div>
            <SearchContext.Provider value={search}>
                <Tabs/>
            </SearchContext.Provider>
        </div>
    );
};

export default Search;