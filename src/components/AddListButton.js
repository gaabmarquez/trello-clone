import React, { useState } from 'react';
// import TextareaAutosize from 'react-textarea-autosize';

export default function AddListButton() {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState('');

  const handleInputChange = ev => {
    setText(ev.target.value);
  };

  const toggleForm = () => {
    setFormOpen(prev => !prev);
  };
  const formRender = () => (
    <div style={styles.form}>
      <input
        autoFocus
        placeholder='Enter a list title...'
        onBlur={toggleForm}
        value={text}
        onChange={handleInputChange}
        style={styles.textArea}
      />
      <div style={styles.actionContainer}>
        <button className='btn' style={styles.actionContainer.addCardBtn}>
          Add List
        </button>
        <span onClick={toggleForm}>
          &nbsp;
          <i
            className='fas fa-times fa-lg'
            style={styles.actionContainer.icon}
          ></i>
        </span>
      </div>
    </div>
  );

  const buttonRender = () => (
    <p
      style={styles.addAnother}
      onClick={() => {
        setFormOpen(prev => !prev);
      }}
    >
      <i className='fas fa-plus'> </i> &nbsp; Add another list
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
    minWidth: '272px',
    color: '#fff'
  },
  addAnother: {
    backgroundColor: 'hsla(0,0%,100%,.24)',
    padding: '10px',
    fontSize: '1.1em',
    colort: 'white',
    cursor: 'pointer',
    boxSizing: 'border-box',
    borderRadius: '3px'
  },
  actionContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '0.5em',
    addCardBtn: {
      color: 'white',
      backgroundColor: '#5aac44',
      fontWeight: 'bold',
      marginRight: '1em'
    },
    icon: {
      color: '#42526e',
      fontSize: '1.5em',
      cursor: 'pointer'
    }
  },
  form: {
    backgroundColor: '#ebecf0',
    padding: '0.5em 0.4em',
    boxSizing: 'border-box',
    borderRadius: '3px'
  },
  textArea: {
    padding: '8px 12px',
    resize: 'none',
    width: '100%',
    border: 'none',
  }
};
