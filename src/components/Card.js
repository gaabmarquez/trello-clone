import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import CardForm from './CardForm';

import { editCard } from '../redux/actions';
import { useDispatch } from 'react-redux';

const CardContainer = styled.div`
  margin-bottom: 0.5rem !important;
  margin-left: 0.5rem !important;
  margin-right: 0.5rem !important;
`;

const EditButton = styled.div`
  position: absolute;
  display: none;
  right: 5px;
  top: 0px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled.div`
  position: absolute;
  display: none;
  right: 5px;
  bottom: 0px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const Card = ({ id, text, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);
  const dispatch = useDispatch();

  // const createCard = () => {
  //   setText('');
  //   dispatch(addCard(listId, text));
  // };

  const saveCard = e => {
    e.preventDefault();
    setText('');
    dispatch(editCard(id, cardText));
    setIsEditing(false);
  };

  const handleInputChange = ev => {
    setText(ev.target.value);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <CardContainer
            className='card'
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <EditButton onClick={toggleEdit}>
              <span>
                &nbsp;
                <i className='fas fa-pen'></i>
              </span>
            </EditButton>

            <DeleteButton>
              <span>
                &nbsp;
                <i className='fas fa-trash'></i>
              </span>
            </DeleteButton>
            <div className='card-body' style={styles.cardBody}>
              {text}
            </div>
          </CardContainer>
        )}
      </Draggable>
    );
  };
  const renderEditForm = () => {
    return (
      <div style={styles.container}>
        <CardForm
          text={cardText}
          toggleForm={toggleEdit}
          buttonText='Save'
          handleInputChange={handleInputChange}
          onSubmit={saveCard}
        />
      </div>
    );
  };
  return isEditing ? renderEditForm() : renderCard();
};
const styles = {
  container: {
    margin: '0.5rem',
    color: '#5e6c84'
  },
  card: {
    margin: '20px',
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
