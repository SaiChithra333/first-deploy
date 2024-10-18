import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import {Route, Routes} from "react-router-dom";
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route exact path = "/" element ={<Create/>}/>
        <Route  path = "/all" element ={<Read/>}/>
        <Route  path = "/:id" element ={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
