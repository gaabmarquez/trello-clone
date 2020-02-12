import React from 'react';
import List from '../List';
// import './Board.scss';
import { useSelector } from 'react-redux';
import AddListButton from '../AddListButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { sort } from '../../redux/actions/listActions';
import styled from 'styled-components';

const Board = () => {
  const lists = useSelector(state => state.lists);
  const dispatch = useDispatch();

  const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 2em;
  `;

  const onDragEnd = ({ destination, source, draggableId }) => {
    if (destination) {
      dispatch(
        sort(
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId
        )
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ListContainer>
        {lists.map(list => (
          <List
            key={list.id}
            id={list.id}
            title={list.title}
            cards={list.cards}
          />
        ))}
        <AddListButton />
      </ListContainer>
    </DragDropContext>
  );
};

export default Board;
