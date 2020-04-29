import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import AddButton from '../ui-components/AddButton';
import styled from 'styled-components';

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5em;
`;
export default function CardForm({
  text,
  toggleForm,
  handleInputChange,
  buttonText,
  onSubmit
}) {
  return (
    <>
      <TextareaAutosize
        minRows={3}
        autoFocus
        placeholder='Enter a title for this card...'
        onBlur={toggleForm}
        value={text}
        onChange={handleInputChange}
        style={styles.textArea}
      />
      <ActionContainer>
        <AddButton
          btnText={buttonText}
          disabled={text.length === 0}
          onClick={onSubmit}
        />
        <span onClick={toggleForm}>
          &nbsp;
          <i className='fas fa-times fa-lg' style={styles.icon}></i>
        </span>
      </ActionContainer>
    </>
  );
}

const styles = {
  icon: {
    color: '#6b778c',
    fontSize: '1.5em',
    cursor: 'pointer'
  },
  textArea: {
    resize: 'none',
    width: '100%',
    border: 'none',
    padding: '8px'
  }
};
