import { FiGithub } from "react-icons/fi";
import {
  Container,
  GitHubLink,
  Logo,
  TestCredentials,
  Warning,
} from "./Home.styles";

const Home = () => {
  return (
    <Container>
      <h1>Xpense</h1>
      <Logo src="logo-new.png" alt="Xpense Logo" />
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
      <p>
        Follow development updates on{" "}
        <GitHubLink
          href="https://github.com/NikolaNikolov93/Xpense"
          target="_blank"
        >
          GitHub
          <FiGithub size={"1.5em"} />
        </GitHubLink>
        .
      </p>
    </Container>
  );
};

export default Home;
