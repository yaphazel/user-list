import React, { useState } from 'react'
import data1 from './data-artist';
import data2 from './data-editor';
import data3 from './data-writer';
import List from './List';
export const SearchContext = React.createContext()

const Search = () => {
    const[search, setSearch] = useState('')
    const searchWord = (e) =>{
        setSearch(e.target.value)
        return search
    }
    const [tabToggle, setToggle] = useState(1);
    const changeToggle = (index) => {
        setToggle(index)
    }
    return (
        <div className="search-container container">
            <div className="row">
                <div className="input-group d-flex align-items-center col-md-6 py-3 ">
                    <div className="input-group-btn" >
                        <button className="btn btn-default"><i class="bi bi-search"></i></button>
                    </div>
                    <div class="">
                        <input type="text" class="form-control" onChange={event => {searchWord(event)}}placeholder='Search Name...' />   
                    </div>
                </div>
                {/* <SearchContext.Provider value={search}>
                    <Tabs/>
                </SearchContext.Provider> */}
                <ul className="nav nav-tabs justify-content-md-end align-items-center col-md-6">
                    <li className={tabToggle === 1 ? "nav-item bg-primary mx-3" : "nav-item mx-3"}>
                        <div className={tabToggle === 1 ? "tab active-tab nav-link text-light" : "tab nav-link"} onClick={() => {changeToggle(1)}}>Artist</div>
                    </li>
                    <li className={tabToggle === 2 ? "nav-item bg-primary mx-3" : "nav-item mx-3"}>
                        <div className={tabToggle === 2 ? "tab active-tab nav-link text-light" : "tab nav-link"} onClick={() => {changeToggle(2)}}>Editor</div>
                    </li>
                    <li className={tabToggle === 3 ? "nav-item bg-primary mx-3" : "nav-item mx-3"}>
                        <div className={tabToggle === 3 ? "tab active-tab nav-link text-light" : "tab nav-link"} onClick={() => {changeToggle(3)}}>Writer</div>
                    </li>
                </ul>
                <div className="tabs-content col-12">
                    <div className={tabToggle === 1 ? "tab-content active-content" : "tab-content"}>
                        <SearchContext.Provider value={search}>
                            <List data={data1}/>
                        </SearchContext.Provider>
                    </div>
                    <div className={tabToggle === 2 ? "tab-content active-content" : "tab-content"}>
                        <SearchContext.Provider value={search}>
                            <List data={data2}/>
                        </SearchContext.Provider>
                    </div>
                    <div className={tabToggle === 3 ? "tab-content active-content" : "tab-content"}>
                        <SearchContext.Provider value={search}>
                            <List data={data3}/>
                        </SearchContext.Provider>
                    </div>
                </div>
            </div>                
        </div>
    );
};

export default Search;