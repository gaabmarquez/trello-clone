import React from 'react';
import './App.scss';
import Board from './board/Board';

function App({ lists }) {
  return (
    <div className='container-fluid mt-4'>
      <h1 style={{ color: 'white' }}>Hello World</h1>
      <Board />
    </div>
  );
}


export default App;
