import React from 'react';
import List from './List';
import { useSelector } from 'react-redux';
import AddList from './AddList';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { sort } from '../redux/actions/listActions';
import styled from 'styled-components';
import { undoLastAction, redoLastAction } from '../redux/actions/listActions';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 2em;
`;

const Board = () => {
  const lists = useSelector(state => state.lists.present);
  const cards = useSelector(state => state.cards);

  const dispatch = useDispatch();

  const undo = () => {
    dispatch(undoLastAction());
  };
  const redo = () => {
    dispatch(redoLastAction());
  };

  const onDragEnd = ({ destination, source, draggableId, type }) => {
    if (destination) {
      dispatch(
        sort(
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId,
          type
        )
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='all-lists' direction='horizontal' type='list'>
        {provided => (
          <ListContainer ref={provided.innerRef} {...provided.droppableProps}>
            <button style={styles.undo} onClick={undo}>
              {' '}
              UNDO!!
            </button>
            <button style={styles.redo} onClick={redo}>
              {' '}
              REDO!!
            </button>

            {Object.keys(lists).map((key, index) => {
              const list = lists[key];
              const listCards =
                list.cards.length > 0
                  ? list.cards.map(cardID => cards[cardID])
                  : [];
              return (
                <List
                  key={list.id}
                  id={list.id}
                  title={list.title}
                  cards={listCards}
                  index={index}
                />
              );
            })}
            {provided.placeholder}

            <AddList />
          </ListContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const styles = {
  undo: {
    position: 'absolute',
    top: '10px',
    right: '20%'
  },
  redo: {
    position: 'absolute',
    top: '10px',
    right: '25%'
  }
};

export default Board;
