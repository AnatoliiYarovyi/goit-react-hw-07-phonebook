import React, { Component } from 'react';
import style from './App.module.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  render() {
    return (
      <div className={style.conteiner}>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={style.caption}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
