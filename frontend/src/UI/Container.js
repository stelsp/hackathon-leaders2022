import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  --bg: ${(props) => props.bg || "var(--clr-bg-secondary)"};
  background-color: var(--bg);
`;
const Box = styled.div`
  --max-width: var(--container-max-width);
  --px: 1rem;
  --pt: ${(props) => props.pt || "1rem"};
  --pb: ${(props) => props.pb || "1rem"};
  margin-inline: auto;
  padding-block: var(--pt) var(--pb);
  width: min(var(--max-width), 100% - (var(--px) * 2));

  border-radius: 0.5rem;
`;
const PageHeading = styled.h2`
  margin-inline: auto;
  margin-block: 0 2rem;
  text-align: center;
  font-size: var(--page-heading-fs);
  font-weight: var(--page-heading-fw);
`;

const Container = ({ heading = "", children, ...props }) => {
  const { bg, pt, pb } = props;

  if (heading !== "")
    return (
      <Wrapper bg={bg}>
        <Box pt={pt} pb={pb}>
          <PageHeading>{heading}</PageHeading>
          {children}
        </Box>
      </Wrapper>
    );

  return (
    <Wrapper bg={bg}>
      <Box pt={pt} pb={pb}>
        {children}
      </Box>
    </Wrapper>
  );
};

export default Container;
