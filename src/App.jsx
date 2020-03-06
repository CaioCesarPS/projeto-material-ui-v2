import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Header from './Components/Header/Header'
import Routes from './router'
import './index.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes></Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
