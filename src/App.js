import React from 'react';
import './App.css';

import Header from './Calendar/Header';
import Events from './Calendar/Events';
import MainHeader from './Calendar/MainHeader';

function App() {
  return (
    <div className="container">
      <header className="header">
        <Header />
        <Events />
      </header>

      <main>
        <MainHeader />
      </main>
    </div>
  );
}

export default App;
