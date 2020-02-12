import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Card = ({ id, text, index }) => {
  const CardContainer = styled.div`
    margin: 10px;
    boxsizing: border-box;
    border-radius: 3px;
    height: auto;
    word-wrap: break-word;
  `;

  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <CardContainer>
          <div
            className='card'
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className='card-body' style={styles.cardBody}>
              {text}
            </div>
          </div>
        </CardContainer>
      )}
    </Draggable>
  );
};
const styles = {
  card: {
    margin: '20px',
    boxSizing: 'border-box',
    borderRadius: '3px',
    height: 'auto',
    wordWrap: 'break-word'
  },
  cardBody: {
    padding: '10px',
    fontSize: '14px'
  }
};

export default Card;
