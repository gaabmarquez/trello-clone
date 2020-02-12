import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default function AddCardButton() {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState('');

  const handleInputChange = ev => {
    setText(ev.target.value);
  };

  const toggleForm = () => {
    setFormOpen(prev => !prev);
  };
  const formRender = () => (
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
      <div style={styles.actionContainer}>
        <button className='btn' style={styles.actionContainer.addCardBtn}>
          Add Card
        </button>
        <span onClick={toggleForm}>
          &nbsp;
          <i
            className='fas fa-times fa-lg'
            style={styles.actionContainer.icon}
          ></i>
        </span>
      </div>
    </>
  );

  const buttonRender = () => (
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
      {formOpen ? formRender() : buttonRender()}
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
  },
  actionContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '0.5em',
    addCardBtn: {
      color: 'white',
      backgroundColor: '#5aac44',
      fontWeight: 'bold',
      marginRight: '1em'
    },
    icon: {
      color: '#6b778c',
      fontSize: '1.5em',
      cursor: 'pointer'
    }
  },

  textArea: {
    resize: 'none',
    width: '100%',
    border: 'none'
  }
};
