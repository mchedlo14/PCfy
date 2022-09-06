import React,{ useState,useEffect } from 'react';
import './App.css';
import Employeeinfo from './components/Employeeinfo';
import Laptopreq from './components/Laptopreq';
import Laptopspage from './components/Laptopspage';
import Startpage from './components/Startpage';
import Successpage from './components/Successpage';
import axios from 'axios';
import AlllaptopInfo from './components/AlllaptopInfo';

function App() {
  const [pageCounter,setPageCounter] = useState(0)
  const [fdata] = useState({})


  return (
    <div className="App">
      {pageCounter === 0 ? <Startpage pageCounter={pageCounter} setPageCounter={setPageCounter}/>
      :
      pageCounter === 1 ? <Employeeinfo pageCounter={pageCounter} setPageCounter={setPageCounter} fdata={fdata}/>
      :
      pageCounter === 2 ? <Laptopreq pageCounter={pageCounter} setPageCounter={setPageCounter} fdata={fdata}/>
      :
      pageCounter === 3 ? <Successpage pageCounter={pageCounter} setPageCounter={setPageCounter}/>
      :
      pageCounter === 4 ? <Laptopspage pageCounter={pageCounter} setPageCounter={setPageCounter} />
      :
      pageCounter === 5 ? <AlllaptopInfo  pageCounter={pageCounter} setPageCounter={setPageCounter}/>
      :
      <></>
      }
    </div>
  );
}

export default App;
