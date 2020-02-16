import React, { useState } from 'react';
import './App.scss';
import Board from './Board';
import { useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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

const SearchButton = styled.button`
  margin-left: 0.6em;
  font-weight: bold;
  background-color: #006098;
  border: 1px solid #bf4600;

  color: white;
  &:hover {
    color: white;
    background-color: #bf4600;
  }
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

const ArchivedContainer = styled.p`
  color: white;
  font-weight: bold;
`;
const MainContainer = styled.div`
  overflow: scroll;
  height: 80vh;

  h1 {
    color: white;
  }
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
      <Navbar style={style.navContainer}>
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
          <SearchButton className='btn' onClick={search}>
            Search
          </SearchButton>
        </Nav>
      </Navbar>

      <MainContainer className='container-fluid mt-4'>
        <h1>Trello Clone </h1>
        <ArchivedContainer>
          Archived Cards: {archived.cards.length}
          <br />
          Archived Lists: {archived.lists.length}
        </ArchivedContainer>

        <Board />
      </MainContainer>
    </>
  );
}

export default App;
