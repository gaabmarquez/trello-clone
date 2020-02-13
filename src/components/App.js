import React from 'react';
import './App.scss';
import Board from './Board';

function App() {
  return (
    <div className='container-fluid mt-4'>
      <h1 style={{ color: 'white' }}>Trello Clone </h1>
      <Board />
    </div>
  );
}

export default App;
