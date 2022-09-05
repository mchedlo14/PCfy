import { useState } from 'react';
import './App.css';
import Employeeinfo from './components/Employeeinfo';
import Laptopreq from './components/Laptopreq';
import Startpage from './components/Startpage';
import Successpage from './components/Successpage';

function App() {
  const [pageCounter,setPageCounter] = useState(2)
  const [fdata] = useState({
    user:{},
    laptop:{}
  })


  return (
    <div className="App">
      {pageCounter === 0 ? <Startpage pageCounter={pageCounter} setPageCounter={setPageCounter}/>
      :
      pageCounter === 1 ? <Employeeinfo pageCounter={pageCounter} setPageCounter={setPageCounter} fdata={fdata}/>
      :
      pageCounter === 2 ? <Laptopreq pageCounter={pageCounter} setPageCounter={setPageCounter} fdata={fdata}/>
      :
      pageCounter === 3 ? <Successpage />
      :
      <></>
      }
    </div>
  );
}

export default App;
