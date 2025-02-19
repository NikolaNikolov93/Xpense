import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  text-align: center;
  gap: 1em;
  text-shadow: 2px 2px 5px rgba(31, 31, 31, 0.5);
`;

const Logo = styled.img`
  width: 200px;
`;

const Warning = styled.p`
  background-color: var(--error-message-color);
  color: var(--primary-text-color);
  padding: 1em;
  font-weight: bold;
  max-width: 400px;
`;

const TestCredentials = styled.p`
  background-color: var(--primary-accent);
  color: var(--primary-text-color);
  padding: 1em;
  font-weight: bold;
  max-width: 400px;
`;

const Home = () => {
  return (
    <Container>
      <h1>Xpense</h1>
      <Logo src="xpense-logo.png" alt="Xpense Logo" />
      <h2>🚧 Under Development 🚧</h2>
      <p>
        This is a **work-in-progress** project and is not intended for real
        financial tracking.
      </p>
      <Warning>
        ❗ Do **not** use real email addresses or sensitive data.
      </Warning>
      <TestCredentials>
        🔹 Test Login: **test@abv.bg** 🔹 Password: **123123**
      </TestCredentials>
      <p>Follow development updates on GitHub.</p>
    </Container>
  );
};

export default Home;
