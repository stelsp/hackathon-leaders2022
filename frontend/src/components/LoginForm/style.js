import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: lightgrey;
`;

export const Form = styled.form`
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  input {
    padding: 0.5em 1em;
    box-shadow: 0 0.25em 1em rgb(0 0 0 / 35%);
    border-radius: 0.5rem;
    background-color: white;
  }

  button {
    padding: 0.5em 1em;
    box-shadow: 0 0.25em 1em rgb(0 0 0 / 35%);
    border-radius: 0.5rem;
    background-color: white;
    font-weight: 600;

    transition: all 0.3s;

    &:hover,
    &:focus-visible {
      scale: 1.02;
      color: grey;
    }

    &:active {
      scale: 1.05;
    }
  }
`;
