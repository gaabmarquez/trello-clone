import React from 'react';
import './App.scss';
import BoardContainer from './board/BoardContainer';

function App() {
  return (
    <>
      <BoardContainer />
      <div className='footer d-flex justify-content-center'>
        <a target='_blank' rel="noopener noreferrer"  href='http://www.linkedin.com/in/gaabmarquez'>
          © 2020, Created by Gabriel Márquez
        </a>
      </div>
    </>
  );
}

export default App;
