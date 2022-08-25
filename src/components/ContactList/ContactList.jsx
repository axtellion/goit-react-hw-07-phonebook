import { Box } from 'components/Box';
import { List, Text, Item } from './ContactList.styled';
import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/itemsSlice';

export const ContactList = ({ contacts, onDeleteContact }) => {
  const dispatch = useDispatch();

  return (
    <Box display="flex" justifyContent="center">
      <List>
        {contacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Text>{name}:</Text>
              <Text>
                {number}
                <FiTrash2 onClick={() => dispatch(remove(id))} />
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
