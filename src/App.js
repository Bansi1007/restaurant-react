import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'


function App() {
  return (
    <div className="App">
    
        <Router>
          <Home/>
        <Navbar />
        <Routes>
         <Route path='/navbar' element={<Navbar/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
