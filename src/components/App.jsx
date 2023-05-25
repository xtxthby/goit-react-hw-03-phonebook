import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Header } from './Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './Filter/Filter';
import { Section } from './Section/Section';
import initialContacts from './contacts.json';


// стилі для ToastContainer
const notifyOptions = {
  position: 'bottom-left',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export class App extends Component{

  state = {
    contacts: initialContacts,
    filter: '',
  }
  componentDidMount() {
    const contactsFromLS = localStorage.getItem('contacts');
    //console.log(contactsFromLS);
    const parsedContacts = JSON.parse(contactsFromLS);
    if (!parsedContacts) return;
    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      //console.log(this.state.contacts);
      //console.log(prevState.contacts);
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  // додавання нового контакту с забороною додачі однакового
  addContact = newContact => {

    const { contacts } = this.state;

    contacts.some(
      contact =>
      contact.name.toLowerCase().trim() ===
      newContact.name.toLowerCase().trim() ||
      contact.number.trim() === newContact.number.trim()
    )
    ? toast.error(`${newContact.name}: is already in contacts`, notifyOptions)
    : this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  getVisibleContacts = () => {
    //  деструкторізація
    const { filter, contacts } = this.state;
    // приводимо до регістру
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      // порівняння
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <Section title= "Phonebook">
          <ContactForm onAddContact={this.addContact} />
          <Header title="Contacts" />
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
        </Section>
        <ToastContainer />
      </>
    );
  }
};
