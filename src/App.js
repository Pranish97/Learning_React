import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {About} from "./pages/About";
import { Navbar } from './Navbar';

function App() {

  return (
    <div className="App">
      <Router>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<h1>Page Not Found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
