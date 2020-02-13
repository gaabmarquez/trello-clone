import React from 'react';
import List from './List';
import { useSelector } from 'react-redux';
import AddList from './AddList';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { sort } from '../redux/actions/listActions';
import styled from 'styled-components';

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
            {Object.keys(lists).map((key, index) => {
              const list = lists[key];
              const listCards = list.cards.map(cardID => cards[cardID]);

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
