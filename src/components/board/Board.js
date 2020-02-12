import React from 'react';
import List from '../List';
import './Board.scss';
import { useSelector } from 'react-redux';
import AddListButton from "../AddListButton";


const Board = ( ) => {
  const lists = useSelector(state => state.lists);

    return (
        <div className="list-container mt-4">
            {lists.map(list => (
                <List key={list.id} title={list.title} cards={list.cards} />

            ))
            }
            <AddListButton />

        </div>
    );
}

export default Board;
