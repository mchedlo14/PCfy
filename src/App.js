import { useState } from 'react';
import './App.css';
import Employeeinfo from './components/Employeeinfo';
import Startpage from './components/Startpage';

function App() {
  const [pageCounter,setPageCounter] = useState(0)
  return (
    <div className="App">
      {pageCounter === 0 ? <Startpage pageCounter={pageCounter} setPageCounter={setPageCounter}/>
      :
      pageCounter === 1 ? <Employeeinfo pageCounter={pageCounter} setPageCounter={setPageCounter}/>
      :
      pageCounter === 2? <></>
      :
      <></>
      }
    </div>
  );
}

export default App;
