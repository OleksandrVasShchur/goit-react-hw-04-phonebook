import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../Style/form.module.css';

const ContactForm = ({submitDate}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = evt => {
    setName(evt.currentTarget.value);
  };
  
  const handleChangeNumber = evt => {
    setNumber(evt.currentTarget.value);
  }

  const handleSubmit = evt => {
    evt.preventDefault();

    submitDate({name, number});
   setName('');
   setNumber('')
  }
  
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label_style}>
        {' '}
        <span className={css.label_distance}>Name</span>
        <input
          className={css.input_style}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label_style}>
        <span className={css.label_distance}> Number</span>
  
        <input
          className={css.input_style}
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button_add} type="submit">
        Add contact
      </button>
    </form>
  );


};


ContactForm.propTypes = {
  submitDate: PropTypes.func.isRequired,
};

export default ContactForm;
