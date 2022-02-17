import React, { useState } from 'react';
import data1 from './data-artist';
import data2 from './data-editor';
import data3 from './data-writer';
import List from './List';

const Tabs = () => {
    const [tabToggle, setToggle] = useState(1);
    const changeToggle = (index) => {
        setToggle(index)
    }
    return (
        <div className='tabs-container'>
            <ul className="tabs nav nav-tabs my-4">
                <li className={tabToggle === 1 ? "nav-item bg-primary" : "nav-item"}>
                    <div className={tabToggle === 1 ? "tab active-tab nav-link text-light" : "tab nav-link"} onClick={() => {changeToggle(1)}}>Artist</div>
                </li>
                <li className={tabToggle === 2 ? "nav-item bg-primary" : "nav-item"}>
                    <div className={tabToggle === 2 ? "tab active-tab nav-link text-light" : "tab nav-link"} onClick={() => {changeToggle(2)}}>Editor</div>
                </li>
                <li className={tabToggle === 3 ? "nav-item bg-primary" : "nav-item"}>
                    <div className={tabToggle === 3 ? "tab active-tab nav-link text-light" : "tab nav-link"} onClick={() => {changeToggle(3)}}>Writer</div>
                </li>
            </ul>
            <div className="tabs-content">
                <div className={tabToggle === 1 ? "tab-content active-content" : "tab-content"}>
                    <List data={data1}/>
                </div>
                <div className={tabToggle === 2 ? "tab-content active-content" : "tab-content"}>
                    <List data={data2}/>
                </div>
                <div className={tabToggle === 3 ? "tab-content active-content" : "tab-content"}>
                    <List data={data3}/>
                </div>
            </div>
        </div>
    );
};

export default Tabs;