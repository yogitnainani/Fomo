import React from "react";
import './App.css';
import Header from './Header'
import Home from './Home'
import About from './About'

function App() {
  return (
    //BEM 
    <div className="App">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
