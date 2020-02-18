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

const MenuButton = styled.button`
  position: absolute;
  color: white;
  top: 55px;
  right: 140px;
  font-weight: bold;
  margin-right: 1em;
  background-color: hsla(0, 0%, 100%, 0.24);
  &:hover {
    color: white;
  }
  &:disabled {
    cursor: not-allowed;
  }
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
            <MenuButton
              className='btn'
              onClick={undo}
              disabled={lists.past.length === 0 && !cards.past}
            >
              <i className='fas fa-undo-alt mr-2'></i>
              Undo last action
            </MenuButton>

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

export default Board;
