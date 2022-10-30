import styled from "styled-components";
import { ButtonPrimary } from "../../UI/Button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  flex-wrap: wrap;
`;

export const ButtonToExcel = styled(ButtonPrimary)`
  background-color: rgb(0, 179, 0, 0.4);
  align-self: flex-end;
`;

export const Table = styled.div``;
