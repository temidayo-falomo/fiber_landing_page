import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing-page/LandingPage';
import SignUp from './pages/sign-up/signup-page/SignUp';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;
