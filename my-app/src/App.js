import 'bootstrap/dist/css/bootstrap.min.css';
import NavbaR from './componant/Navbar';
import BasicExample from './componant/Project';
// import { Routes, Route } from "react-router-dom";
import Cv from './componant/CV';
import './App.css';


function App() {
  return (
    <div className="App">

      <NavbaR />

      {/* <header className="App-header">
        Portofilo
      </header> */}
      {/* <Routes className="main"> */}
      {/* <Route path="/" element={} /> */}

      {/* </Routes> */}
      <BasicExample />
      <div>

        <Cv />
      </div>
    </div>
  );
}

export default App;
