import React from 'react';
import data1 from './data-artist';
import data2 from './data-editor';
import data3 from './data-writer';
import List from './List';
const TabsContent = (props) => {
    console.log(props)
    return (
        <div className="tabs-content">
                <div className={props === 1 ? "tab-content active-content" : "tab-content"}>
                    <List data={data1}/>
                </div>
                <div className={props === 2 ? "tab-content active-content" : "tab-content"}>
                    <List data={data2}/>
                </div>
                <div className={props === 3 ? "tab-content active-content" : "tab-content"}>
                    <List data={data3}/>
                </div>
        </div>
    );
};

export default TabsContent;