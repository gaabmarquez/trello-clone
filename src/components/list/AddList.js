import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/actions/listActions';
import styled from 'styled-components';
import ListForm from './ListForm';

const AddListContainer = styled.div`
  min-width: 272px;
  color: #fff;
`;

const AddAnotherList = styled.p`
  background-color: hsla(0, 0%, 100%, 0.24);
  padding: 10px;
  font-size: 1.1em;
  color: white;
  cursor: pointer;
  border-radius: 3px;
`;

const AddList = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const createList = () => {
    if (text.length > 0) {
      dispatch(addList(text));
      setText('');
    }
  };

  const handleInputChange = ev => {
    setText(ev.target.value);
  };

  const toggleForm = () => {
    setFormOpen(prev => !prev);
    setText('');
  };

  const renderForm = () => (
    <ListForm
      text={text}
      buttonText='Add List'
      toggleForm={toggleForm}
      handleInputChange={handleInputChange}
      onSubmit={createList}
    />
  );

  const renderButton = () => (
    <AddAnotherList
      onClick={() => {
        setFormOpen(prev => !prev);
      }}
    >
      <i className='fas fa-plus'> </i> &nbsp; Add another list
    </AddAnotherList>
  );
  return (
    <AddListContainer>
      {formOpen ? renderForm() : renderButton()}
    </AddListContainer>
  );
};

export default AddList;
