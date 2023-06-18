import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import css from './Style/style-app.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('components')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');


  useEffect(() => {
    localStorage.setItem('components', JSON.stringify(contacts));
  }, [contacts]);

    const addContact = data => {
      const searchSameName = contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      );

      if (searchSameName) {
        alert(`${data.name} is already in contacts`);
      } else {
        setContacts(prevCont => {
              return [
                ...prevCont,
                {
                  ...data,
                  id: nanoid(7),
                },
              ];
            });
      }
    };

  const deleteContact = contactsId => {
    setContacts(prevContacts => {
      return contacts.filter(contact => contact.id !== contactsId);
    });
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);

  };

  const showContacts = () => {

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={css.total_box}>
      <h1>Phonebook</h1>
      <ContactForm submitDate={addContact} />

      <h2>Contacts</h2>

      <Filter value={filter} changeFilter={changeFilter} />

      <ContactList contacts={showContacts()} onDeleteContact={deleteContact} />
    </div>
  );
};

