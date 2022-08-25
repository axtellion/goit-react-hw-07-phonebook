import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 400px;
  align-items: center;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0;
  svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
    :hover {
      color: #7fffd4;
    }
  }
`;

export const Btn = styled.button`
  padding: 5px;

  color: orange;
  cursor: pointer;
  :hover,
  :focus {
    color: #7fffd4;
  }
`;
