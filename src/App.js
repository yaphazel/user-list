import React from 'react'
import Search from './Search';

function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="content bg-white my-5 p-5 col-12">
          <h3 className="title ">Users</h3>
          <Search />  
        </div> 
      </section>
      
    </div>
  );
}

export default App;
