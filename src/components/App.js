import React, { useState } from 'react';
import './App.scss';
import Board from './Board';
import { useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
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
  const search = ev => {
    dispatch(filterCards(searchText));
  };
  return (
    <>
      <Navbar variant='dark' style={style.navContainer}>
        <Nav className='mr-auto'>
          {/* <Form inline> */}
          <FormControl
            type='text'
            value={searchText}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            placeholder='Search text inside cards'
            className='mr-sm-2'
          />
          <SearchButton onClick={search}> Search</SearchButton>
          {/* </Form> */}
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
