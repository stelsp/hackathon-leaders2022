import styled from "styled-components";

export const Offset = styled.div`
  --pt: ${(props) => props.pt};
  --pt: ${(props) => props.pb};

  padding-block: var(--pt) var(--pb);
`;
