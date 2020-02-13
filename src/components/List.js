import React from 'react';
import Card from './Card';
import AddCardButton from './AddCardButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: #ebecf0;
  margin-right: 1em;
  box-sizing: border-box;
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
          <Droppable droppableId={String(id)}>
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <h2 style={styles.title}>{title}</h2>
                {cards.map((card, index) => (
                  <Card
                    key={card.id}
                    index={index}
                    text={card.text}
                    id={card.id}
                  />
                ))}
                {provided.placeholder}
                <AddCardButton listId={id} />
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
