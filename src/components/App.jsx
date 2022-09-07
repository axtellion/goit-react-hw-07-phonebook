import { Box } from './Box';

import { Title, WrapList } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Layout } from './Layout/Layout';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAddContactMutation } from 'redux/contactsApi';
import { useFetchContactsQuery } from 'redux/contactsApi';

export const App = () => {
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const addContacts = ({ name, number }) => {
    const errorName = contacts.find(contact => contact.name === name);
    if (errorName) {
      toast.error('This contact is already added');
      return;
    }

    const contact = { name, number };
    addContact(contact);
  };

  return (
    <Box as="main" width="1024px" mx="auto">
      <Layout />
      <ContactForm onSubmit={addContacts} />
      <WrapList>
        <Title>Contacts</Title>
        <Filter />
        {contacts && <ContactList contacts={contacts} />}
      </WrapList>
      <ToastContainer theme="colored" autoClose={3000} />
      <GlobalStyle />
    </Box>
  );
};
