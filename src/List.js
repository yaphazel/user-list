import React, { useContext } from 'react';
import { SearchContext } from './Search';
const  List  = ({data}) => {
    const searchTerm = useContext(SearchContext)
    return (
        <div>
            {data.filter((val) => {
                if(searchTerm === ""){
                    return val
                } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }

            }).map((val) => {
                return( 
                    <div key={val.name} className="data card m-2 col-5" >
                        <div className='image-container'>
                        <img src="" alt="" height="100px" width="100px" />
                        </div>
                        <div className="card-body">
                            <h5 className="name card-title">{val.name}</h5>  
                            <p className="origin">{val.origin}</p> 
                        </div>    
                    </div>
                    
                    );
            })}
        </div>
    );
};

export default List  ;