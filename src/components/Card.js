import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ id, text, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          className='card mb-2 mx-2'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='card-body' style={styles.cardBody}>
            {text}
          </div>
        </div>
      )}
    </Draggable>
  );
};
const styles = {
  cardBody: {
    padding: '10px',
    fontSize: '14px'
  }
};

export default Card;
