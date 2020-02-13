import React from 'react';
import Card from './Card';
import AddCard from './AddCard';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: #ebecf0;
  margin-right: 1em;
  border-radius: 3px;
  min-width: 272px;
  max-width: 272px;
`;

const List = ({ id, title, cards, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <ListContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h2 style={styles.title}>{title}</h2>

          <Droppable droppableId={String(id)}>
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {cards.map((card, index) => (
                  <Card
                    key={card.id}
                    index={index}
                    text={card.text}
                    id={card.id}
                  />
                ))}
                {provided.placeholder}
                <AddCard listId={id} />
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
};

const styles = {
  container: {
    backgroundColor: '#ebecf0',
    marginRight: '1em',
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
