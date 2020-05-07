import React, { Suspense } from 'react';

// import { Route } from 'react-router-dom';

import FrontendLayout from './layouts/Frontend';
import Home from './components/home';

import './App.css';

function App() {
  return (
    <div className="App">
      <FrontendLayout>
        <Home/>
      </FrontendLayout>
    </div>
  );
}

export default App;
