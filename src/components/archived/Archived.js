import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

const ArchivedContainer = styled.div`
  position: absolute;
  right: 0px;
  top: 50px;
  background-color: #ebecf0;
  margin-right: 1em;
  border-radius: 3px;
  min-width: 272px;
  padding: 14px 20px;
  height: 90vh;
  margin-right: 0;
  min-width: 320px;
  h2 {
    text-decoration: underline;
    text-align: center;
  }
`;

const ArchivedListContainer = styled.div`
  overflow: scroll;
  max-height: 30vh;
`;
const ArchivedCardContainer = styled.div`
  overflow: scroll;
  max-height: 40vh;
`;

const MenuButton = styled.button`
  position: absolute;
  color: white;
  top: 55px;
  right: 0px;
  font-weight: bold;
  margin-right: 1em;
  background-color: hsla(0, 0%, 100%, 0.24);
  &:hover {
    color: white;
  }
`;

export default function Archived() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const archived = useSelector(state => state.archived.present);

  const showButton = () => {
    return (
      <MenuButton className='btn' onClick={toggleMenu}>
        <i className='fas fa-ellipsis-h mr-2'></i>
        Show Menu
      </MenuButton>
    );
  };

  const renderContainer = () => {
    return (
      <ArchivedContainer>
        <h2>Menu</h2>
        <span onClick={toggleMenu}>
          &nbsp;
          <i className='fas fa-times fa-lg' style={styles.icon}></i>
        </span>

        <h5 style={styles.title}>Archived Lists ({archived.lists.length})</h5>
        <ArchivedListContainer
          style={{ marginBottom: '2em', marginTop: '2em' }}
        >
          {archived.lists.map(list => {
            return (
              <Card key={`archived-${list.id}`} body style={styles.cardBody}>
                {list.title}
              </Card>
            );
          })}
        </ArchivedListContainer>
        <h5 style={styles.title}>Archived Cards ({archived.cards.length})</h5>

        <ArchivedCardContainer
          style={{ marginBottom: '2em', marginTop: '5em' }}
        >
          {archived.cards.map(card => {
            return (
              <Card key={`archived-${card.id}`} body style={styles.cardBody}>
                {card.text}
              </Card>
            );
          })}
        </ArchivedCardContainer>
      </ArchivedContainer>
    );
  };

  return showMenu ? renderContainer() : showButton();
}

const styles = {
  icon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer'
  },
  cardBody: {
    padding: '5px',
    marginBottom: '5px'
  },

  title: {
    position: 'fixed',
    backgroundColor: '#ebecf0'
  }
};
