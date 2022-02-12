import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Router,
  Switch,
  Route,
} from "react-router-dom";


import Header from './components/Header/Header'
import Career from './pages/Career'
import Home from './pages/Home'

function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:name" element={<Career/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
