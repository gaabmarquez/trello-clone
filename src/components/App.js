import React, { useState } from 'react';
import './App.scss';
import Board from './Board';
import { useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { filterCards } from '../redux/actions/searchActions';

const style = {
  navContainer: {
    display: 'grid',
    justifyContent: 'space-around',
    background: 'rgba(0,0,0,.15)'
  }
};

const SearchButton = styled(Button)`
  font-weight: bold;
  background: rgba(0, 0, 0, 0.2);
`;

const ClearSearh = styled.i`
  right: 5px;
  position: absolute;
  top: 10px;
  color: #6b778c;
  cursor: pointer;
  font-size: 1.2em;
`;
const SearchContainer = styled.div`
  position: relative;
`;

function App() {
  const archived = useSelector(state => state.archived);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const handleKeyDown = ev => {
    if (ev.keyCode === 13) {
      search();
    }
  };
  const handleInputChange = ev => {
    setSearchText(ev.target.value);
  };
  const search = () => {
    dispatch(filterCards(searchText));
  };
  const clearSearh = () => {
    setSearchText('');
    dispatch(filterCards(''));
  };

  return (
    <>
      <Navbar variant='dark' style={style.navContainer}>
        <Nav className='mr-auto'>
          <SearchContainer>
            <input
              type='text'
              value={searchText}
              onKeyDown={handleKeyDown}
              onChange={handleInputChange}
              placeholder='Search text inside cards'
              className='mr-sm-2  form-control'
            />
            {searchText.length > 0 ? (
              <ClearSearh className='fas fa-times' onClick={clearSearh} />
            ) : (
              <> </>
            )}
          </SearchContainer>
          <SearchButton onClick={search}>Search</SearchButton>
        </Nav>
      </Navbar>
      <div className='container-fluid mt-4'>
        <h1 style={{ color: 'white' }}>Trello Clone </h1>
        <p style={{ color: 'white', fontWeight: 'bold' }}>
          Archived Cards: {archived.cards.length}
          <br />
          Archived Lists: {archived.lists.length}
        </p>

        <Board />
      </div>
    </>
  );
}

export default App;
