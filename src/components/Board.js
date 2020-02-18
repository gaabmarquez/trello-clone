import React from 'react';
import List from './List';
import { useSelector } from 'react-redux';
import AddList from './AddList';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { sort } from '../redux/actions/listActions';
import styled from 'styled-components';
import { undoLastAction } from '../redux/actions/listActions';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 2em;
`;

const Board = () => {
  const lists = useSelector(state => state.lists);
  const cards = useSelector(state => state.cards);

  const dispatch = useDispatch();

  const undo = () => {
    dispatch(undoLastAction());
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
            <button
            className="btn btn-info"
              style={styles.undo}
              onClick={undo}
              disabled={lists.past.length === 0 || !cards.past}
            >
              {' '}
              UNDO LAST ACTION
            </button>

            {Object.keys(lists.present).map((key, index) => {
              const list = lists.present[key];
              const listCards =
                list.cards.length > 0
                  ? list.cards
                      .map(cardID => cards.present[cardID])
                      .filter(card => card !== undefined)
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
    right: '10px'
  },
  redo: {
    position: 'absolute',
    top: '10px',
    right: '25%'
  }
};

export default Board;
