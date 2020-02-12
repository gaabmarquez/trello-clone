import React from 'react';
import Card from './Card';
import AddCardButton from './AddCardButton';

import { Droppable } from 'react-beautiful-dnd';

const List = ({ id, title, cards }) => {
  return (
    
    <Droppable droppableId={String(id)}>
      {provided => (
        <div
          style={styles.container}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2 style={styles.title}>{title}</h2>
          {cards.map((card, index) => (
            <Card key={card.id} index={index} text={card.text} id={card.id} />
          ))}
          {provided.placeholder}
          <AddCardButton listId={id} />
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: '#ebecf0',
    marginRight: '1em',
    boxSizing: 'border-box',
    borderRadius: '3px',
    minWidth: '272px',
    maxWidth: '272px'


  },
  title: {
    padding: '10px',
    fontSize: '1.2em'
  }
};
export default List;
