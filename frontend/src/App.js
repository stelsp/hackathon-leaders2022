import { Container } from "./layout/Container";
import { useGetDataQuery } from "./store/dataSlice";

const App = () => {
  const { data } = useGetDataQuery();
  console.log(data);

  return (
    <Container maxWidth="45rem" padding="1rem">
      App
    </Container>
  );
};

export default App;
