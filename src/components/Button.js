// Styled Component
import styled from "styled-components";

export const CartButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: var(--lightRed);
  border: solid var(--mainGreen);
  color: var(--mainGreen);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: var(--mainRed);
    color: var(--lightGreen);
    border: solid var(--mainGreen);
  }
`;

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: solid var(--lightBlue);
  color: var(--lightBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
`;
