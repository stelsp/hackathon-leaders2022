import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import styled from "styled-components";

const Wrapper = styled.div`
  width: min(1232px, 100% - (1rem * 2));
  margin: 1rem auto;
  padding-inline: 1rem;
  box-shadow: 0 0.25em 1em rgb(0 0 0 / 35%);
  border-radius: 0.5rem;

  background-color: var(--clr-bg-primary);
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
};

export default App;
