import React from 'react';
import './Styles/App.css';
import Header from './Components/Header';
import ListView from './Views/ListView';

function App() {
  return (
    <div className="App">
      <Header />
      <ListView />
    </div>
  );
}

export default App;
