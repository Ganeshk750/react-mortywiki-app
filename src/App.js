
import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Locations from './Pages/Locations';
import Carddetails from './components/Cards/CardDetails';

// Component
function App(){
  return(
    <Router>
       <div className="App">
         <Navbar /> 
       </div>
       <Routes>
          <Route  path="/" element={ <Home />} />
          <Route  path="/:id" element={ <Carddetails />} />
          <Route  path="/episodes" element={ <Episodes /> } />
          <Route  path="/episodes/:id" element={ <Carddetails />} />
          <Route  path="/location" element={ <Locations /> } />
          <Route  path="/location/:id" element={ <Carddetails />} />
       </Routes>
    </Router>
  )
}


// Page
const  Home = ()  => {
  let [species, setSpecies] = useState("");
  let [gender, setGender] = useState("");
  let [status, setStatus] = useState("");
  let [search, setSearch] = useState("");
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  
  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  
  useEffect(() => {
    (async function(){
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api])
  
  return (
    <div className="App">
          <h1 class="text-center ">Characters</h1>
        <Search setPageNumber={setPageNumber} setSearch={setSearch} />
        <div className="container">
          <div className="row">
                <Filters setStatus={setStatus} 
                setPageNumber={setPageNumber} 
                setGender={setGender} 
                setSpecies={setSpecies} />
              <div className="col-8">
                <div className="row">
                  <Cards results={results}  page="/" />
                </div>
              </div>
          </div>
        </div>
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
