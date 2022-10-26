import styled from "styled-components";

export const Container = styled.div`
  --max-width: ${(props) => props.maxWidth || "1200px"};
  --px: ${(props) => props.px || "1rem"};
  --pt: ${(props) => props.pt || "1rem"};
  --pb: ${(props) => props.pb || "1rem"};

  margin-inline: auto;
  padding-block: var(--pt) var(--pb);
  width: min(var(--max-width), 100% - (var(--px) * 2));
`;
