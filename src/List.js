import React, { useContext } from 'react';
import { SearchContext } from './Search';
const  List  = ({data}) => {
    const searchTerm = useContext(SearchContext)
    console.log(searchTerm)
    return (
        <div className="card-group container justify-content-center">
            <div className="row row-cols-xxl-3">
            {data.filter((val) => {
                if(searchTerm === ""){
                    return val
                } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }

            }).map((val) => {
                return( 
                    <div className="col">
                        <div key={val.name} className="data card" >
                            <div className='image-container'>
                                <img src={val.img} alt="" height="120px" width="120px" />
                            </div>
                            <div className="card-body">
                                <h4 className="name card-title">{val.name}</h4>  
                                <p className="origin card-info">{val.origin}</p> 
                            </div>    
                        </div>
                    </div>
                    
                    );
            })}
        
            </div>
        </div>
    );
};

export default List  ;