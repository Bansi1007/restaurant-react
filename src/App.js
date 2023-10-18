import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
    
        <Router>
          <Home/>
        <Navbar />
        <Routes>
         <Route path='/navbar' element={<Navbar/>}/>
         <Route path='/menu' element={<Menu/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
