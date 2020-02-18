import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import CardForm from './CardForm';

import { editCard } from '../redux/actions';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { archiveCard, duplicateCard } from '../redux/actions/cardActions';

const CardContainer = styled.div`
  margin-bottom: 0.5rem !important;
  margin-left: 0.5rem !important;
  margin-right: 0.5rem !important;
`;

const DuplicateButton = styled.div`
  position: absolute;
  display: none;
  right: 70px;
  bottom: 0px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    color: #bf4600;
    opacity: 0.8;
  }
`;

const EditButton = styled.div`
  position: absolute;
  display: none;

  right: 40px;
  bottom: 0px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    color: #bf4600;
    opacity: 0.8;
  }
`;

const ArchiveButton = styled.div`
  position: absolute;
  display: none;
  right: 10px;
  bottom: 0px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    color: #bf4600;
    opacity: 0.8;
  }
`;

const Card = ({ id, text, index, listId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);
  const dispatch = useDispatch();
  const search = useSelector(state => state.search);

  const saveCard = e => {
    e.preventDefault();
    setText(cardText);
    dispatch(editCard(id, cardText));
    setIsEditing(false);
  };

  const handleInputChange = ev => {
    setText(ev.target.value);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const archive = () => {
    dispatch(archiveCard({ id, text, list: listId }));
    setIsEditing(false);
  };

  const duplicate = () => {
    dispatch(duplicateCard({ id, text: `Copy of ${text}`, list: listId }));
    setIsEditing(false);
  };

  const renderCard = () => {
    return !search || text.toUpperCase().includes(search.toUpperCase()) ? (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <CardContainer
            className='card'
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <OverlayTrigger
              placement='top'
              overlay={<Tooltip>Duplicate Card</Tooltip>}
            >
              <DuplicateButton onClick={duplicate}>
                <span>
                  &nbsp;
                  <i className='fas fa-copy'></i>
                </span>
              </DuplicateButton>
            </OverlayTrigger>
            <OverlayTrigger
              placement='top'
              overlay={<Tooltip>Edit Card</Tooltip>}
            >
              <EditButton onClick={toggleEdit}>
                <span>
                  &nbsp;
                  <i className='fas fa-pen'></i>
                </span>
              </EditButton>
            </OverlayTrigger>

            <OverlayTrigger
              placement='top'
              overlay={<Tooltip>Archive Card</Tooltip>}
            >
              <ArchiveButton onClick={archive}>
                <span>
                  &nbsp;
                  <i className='fas fa-archive'></i>
                </span>
              </ArchiveButton>
            </OverlayTrigger>

            <div className='card-body' style={styles.cardBody}>
              {text}
            </div>
          </CardContainer>
        )}
      </Draggable>
    ) : (
      <> </>
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
    padding: '5px 10px',
    marginBottom: '20px'
  }
};

export default Card;
