import { Box } from 'components/Box';
import { Logo } from './Layout.styled';

export const Layout = () => {
  return (
    <Box as="header" bg="#00BFFF" py={10} px={3} mb="100px">
      <a href="/">
        <Logo>Phonebook</Logo>
      </a>
    </Box>
  );
};
