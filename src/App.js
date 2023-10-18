import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'
import Menu from './components/Menu'
import ContactUs from './components/Contact_us';

function App() {
  return (
    <div className="App">
    
        <Router>
          <Navbar/>
          
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
         <Route path='/home' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/menu' element={<Menu/>}/>
         <Route path='/contact_us' element={<ContactUs/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
