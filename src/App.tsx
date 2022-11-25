import { Form } from "./components/Form/Form";
import { GlobalStyle } from "./GlobalStyles";
import { Container, Subtitle, Title } from "./styles";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Welcome to App</Title>
        <Subtitle>Let’s go calculate your tips</Subtitle>
        <Form />
      </Container>
    </>
  );
};
