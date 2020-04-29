import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addCard } from '../../redux/actions';
import CardForm from './CardForm';

export default function AddCard({ listId }) {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const createCard = () => {
    setText('');
    dispatch(addCard(listId, text));
  };

  const handleInputChange = ev => {
    setText(ev.target.value);
  };

  const toggleForm = () => {
    setFormOpen(prev => !prev);
    setText('');
  };
  const renderForm = () => (
    <CardForm
      text={text}
      buttonText='Add Card'
      toggleForm={toggleForm}
      handleInputChange={handleInputChange}
      onSubmit={createCard}
    />
  );

  const renderButton = () => (
    <p
      style={styles.addAnother}
      onClick={() => {
        setFormOpen(prev => !prev);
      }}
    >
      <i className='fas fa-plus'> </i> &nbsp; Add another card
    </p>
  );
  return (
    <div style={styles.container}>
      {formOpen ? renderForm() : renderButton()}
    </div>
  );
}

const styles = {
  container: {
    margin: '1em',
    color: '#5e6c84'
  },
  addAnother: {
    margin: '0.5em 1em',
    cursor: 'pointer'
  }
};
