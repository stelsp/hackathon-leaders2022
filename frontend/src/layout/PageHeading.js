import styled from "styled-components";

export const PageHeading = styled.h2`
  --fs: ${(props) => props.fs || "1.5rem"};
  --fw: ${(props) => props.fw || "600"};

  margin-inline: auto;
  text-align: center;
  font-size: var(--fs);
  font-weight: var(--fw);

  @media (min-width: 768px) {
    --fs: ${(props) => props.fs * 1.3 || "2rem"};
  }
`;
