import React from 'react';
import './App.scss';
import Board from './Board';
import { useSelector } from 'react-redux';

function App() {
  const archived = useSelector(state => state.archived);

  return (
    <div className='container-fluid mt-4'>
      <h1 style={{ color: 'white' }}>Trello Clone </h1>
      <p style={{ color: 'white', fontWeight: 'bold' }}>
        Archived Cards: {archived.cards.length}
        <br />
        Archived Lists: {archived.lists.length}
      </p>

      <Board />
    </div>
  );
}

export default App;
