import React from 'react';
import Card from './Card';
import AddCardButton from './AddCardButton';

const List = ({ id, title, cards }) => {
  // const cards = useSelector(state => state.lists);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      {cards.map(card => (
        <Card key={card.id} text={card.text} />
      ))}

      <AddCardButton  listId={id} />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ebecf0',
    marginRight: '1em',
    boxSizing: 'border-box',
    borderRadius: '3px',
    minWidth: '272px'
  },
  title: {
    padding: '10px',
    fontSize: '1.2em'
  }
};
export default List;
