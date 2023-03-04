import React from "react";
import './App.css';
import Header from './Header'
import Home from './Home'
import About from './About'
import Types from './Types'

function App() {
  return (
    //BEM 
    <div className="App">
      <Header />
      <Home />
      <About />
      <Types />
    </div>
  );
}

export default App;
