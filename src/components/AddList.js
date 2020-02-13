import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../redux/actions/listActions';

import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #ebecf0;
  padding: 0.5em 0.4em;
  box-sizing: border-box;
  border-radius: 3px;
`;

const FormInput = styled.input`
  padding: 8px 12px;
  resize: none;
  width: 100%;
  border: none;
`;
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
  box-sizing: border-box;
  border-radius: 3px;
`;

const AddButton = styled.button`
  color: white;
  background-color: #5aac44;
  font-weight: bold;
  margin-right: 1em;
  &:hover {
    color: white;
  }
`;
const styles = {
  actionContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '0.5em'
  },
  icon: {
    color: '#42526e',
    fontSize: '1.5em',
    cursor: 'pointer'
  }
};

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

  const formRender = () => (
    <FormContainer>
      <FormInput
        autoFocus
        placeholder='Enter a list title...'
        onBlur={toggleForm}
        value={text}
        onChange={handleInputChange}
      />
      <div style={styles.actionContainer}>
        <AddButton
          className='btn'
          disabled={text.length === 0}
          onMouseDown={createList}
        >
          Add List
        </AddButton>
        <span onClick={toggleForm}>
          &nbsp;
          <i className='fas fa-times fa-lg' style={styles.icon}></i>
        </span>
      </div>
    </FormContainer>
  );

  const buttonRender = () => (
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
      {formOpen ? formRender() : buttonRender()}
    </AddListContainer>
  );
};

export default AddList;