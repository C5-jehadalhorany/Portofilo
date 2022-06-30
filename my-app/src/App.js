import 'bootstrap/dist/css/bootstrap.min.css';
import NavbaR from './componant/Navbar';
import BasicExample from './componant/Project';
// import { Routes, Route } from "react-router-dom";
import Cv from './componant/CV';
import GridExample from './componant/Mywork';
import './App.css';


function App() {
  return (
    <div className="App">

      <NavbaR />
     
      <div>

        <Cv />
      </div>
      <br />
      <GridExample/>

      
      <>
      <br />
      <BasicExample />
      </>
    </div>

  );
}

export default App;
