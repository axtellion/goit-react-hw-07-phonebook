import { Box } from './Box';
import { nanoid } from 'nanoid';
import { Title, WrapList } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Layout } from './Layout/Layout';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/itemsSlice';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.items.contacts);
  const filter = useSelector(state => state.items.filter);

  const addContacts = ({ name, number }) => {
    const errorName = contacts.find(contact => contact.name === name);
    if (errorName) {
      toast.error('This contact is already added');
      return;
    }

    const contact = { id: nanoid(), name, number };
    dispatch(add(contact));
  };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  getVisibleContact();

  return (
    <Box as="main" width="1024px" mx="auto">
      <Layout />
      <ContactForm onSubmit={addContacts} />
      <WrapList>
        <Title>Contacts</Title>
        <Filter />
        <ContactList contacts={getVisibleContact()} />
      </WrapList>
      <ToastContainer theme="colored" autoClose={3000} />
      <GlobalStyle />
    </Box>
  );
};
