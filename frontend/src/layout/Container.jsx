import styled from "styled-components";

export const Container = styled.div`
  --max-width: ${(props) => props.maxWidth};
  --padding: ${(props) => props.padding};

  width: min(var(--max-width), 100% - (var(--padding) * 2));
  margin-inline: auto;
`;
