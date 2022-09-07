import { Box } from 'components/Box';
import { List, Text, Item } from './ContactList.styled';
import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';

import { useSelector } from 'react-redux';
import { useDeleteContactMutation } from 'redux/contactsApi';

export const ContactList = ({ contacts }) => {
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Box display="flex" justifyContent="center">
      <List>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <Item key={id}>
              <Text>{name}:</Text>
              <Text>
                {phone}
                <FiTrash2 onClick={() => deleteContact(id)} />
              </Text>
            </Item>
          );
        })}
      </List>
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
