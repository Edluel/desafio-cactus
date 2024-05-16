import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
//components
import Header from './components/header/Header';
import Client from './components/clientContent/Client';
import Search from './components/seachbar/Search';
import Topbar from './components/topbar/Topbar';


function App() {

  const [data, setData] = useState(null)


  return (
    <Router>
      <div className="App">

        <Header/>

          <Topbar/>
          
            <Routes>
              <Route  
                exact path="/create" 
                element={<h1>Create</h1>}
              />
              <Route  
                path="/update" 
                element={<h1>update</h1>}
              />
              <Route  
                path="/del" 
                element={<h1>delete</h1>}
              />
              <Route 
                path="*" 
                element={<>
                  <Search setData={setData}/>
                  <Client data={data}/>
                </>} 
              />
            </Routes>

      </div>
    </Router>
  );
}

export default App;
