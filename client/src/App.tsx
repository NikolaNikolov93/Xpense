import styled from "styled-components";
import "./App.css";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
`;

const Logo = styled.img`
  height: 300px;
`;

function App() {
  return (
    <Container>
      <h1>Xpense</h1>
      <Logo src="xpense-logo.png" alt="" />
      <h1>In production...</h1>
    </Container>
  );
}

export default App;
