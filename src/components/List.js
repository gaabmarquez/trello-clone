import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from './Card';
import AddCard from './AddCard';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import ListForm from './ListForm';
import { editList } from '../redux/actions/listActions';

const ListContainer = styled.div`
  background-color: #ebecf0;
  margin-right: 1em;
  border-radius: 3px;
  min-width: 272px;
  max-width: 272px;
`;

const EditButton = styled.div`
  position: absolute;
  // display: none;
  right: 45px;
  bottom: 5px;
  opacity: 0.5;
  ${ListContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const ArchiveButton = styled.div`
  position: absolute;
  // display: none;
  right: 15px;
  bottom: 5px;
  opacity: 0.5;
  ${ListContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;
const List = ({ id, title, cards = [], index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setTitle] = useState(title);
  const dispatch = useDispatch();

  const saveChanges = e => {
    e.preventDefault();
    // setTitle('');
    console.log('LIST ID', id, listTitle);
    dispatch(editList(id, listTitle));
    setIsEditing(false);
  };

  const handleInputChange = ev => {
    setTitle(ev.target.value);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const archive = () => {
    // dispatch(archiveCard({ id, text, list: listId }));
    setIsEditing(false);
  };

  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <ListContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {isEditing ? (
            <ListForm
              text={listTitle}
              buttonText='Save'
              toggleForm={toggleEdit}
              handleInputChange={handleInputChange}
              onSubmit={saveChanges}
            />
          ) : (
            <div style={{ position: 'relative' }}>
              <h2 style={styles.title}>{title}</h2>
              <OverlayTrigger
                placement='top'
                overlay={<Tooltip>Edit List title</Tooltip>}
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
                overlay={<Tooltip>Archive List</Tooltip>}
              >
                <ArchiveButton onClick={archive}>
                  <span>
                    &nbsp;
                    <i className='fas fa-archive'></i>
                  </span>
                </ArchiveButton>
              </OverlayTrigger>
            </div>
          )}
          <Droppable droppableId={String(id)}>
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {cards.map((card, index) => (
                  <Card
                    key={card.id}
                    index={index}
                    text={card.text}
                    id={card.id}
                    listId={id}
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
  actionContainer: {
    position: 'relative'
  },
  title: {
    padding: '10px',
    fontSize: '1.2em'
  }
};
export default List;
