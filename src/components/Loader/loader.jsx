import { CirclesWithBar } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <CirclesWithBar color="blue" ariaLabel="circles-with-indicator" />
    </LoaderContainer>
  );
};
