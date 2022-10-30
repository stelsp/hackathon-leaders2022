import styled from "styled-components";

export const ButtonPrimary = styled.button`
  padding: 0.5em 1em;
  box-shadow: 0 0.25em 1em rgb(0 0 0 / 35%);
  border-radius: 0.5rem;
  font-weight: var(--fw-600);
  background-color: var(--clr-bg-secondary);
  transition: all 0.3s;

  &:hover,
  &:focus-visible {
    scale: 1.02;
    color: grey;
  }

  &:active {
    scale: 1.05;
  }
`;
