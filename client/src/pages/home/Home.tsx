import { FiGithub } from "react-icons/fi";
import {
  Container,
  GitHubLink,
  GitHubLinkWrapper,
  HeadlineButtonsWrapper,
  HeadlineWrapper,
  Logo,
  LogoWrapper,
} from "./Home.styles";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <HeadlineWrapper>
        <h1>Xpense - Your Smart Expense Tracker</h1>
        <h2>Effortlessly track, manage, and optimize your spending.</h2>
        <h4>🚧 Currently in Development 🚧</h4>
        <h4>❗ Do NOT use real email addresses or sensitive data.</h4>
        <h4>
          ⚠️ Note: Initial loading times are slower due to backend hosting
          settings.
        </h4>
        <HeadlineButtonsWrapper>
          <Button onClick={() => navigate("/login")}>Log in</Button>
          <Button>Try Demo Account</Button>
        </HeadlineButtonsWrapper>
      </HeadlineWrapper>
      <LogoWrapper>
        <Logo
          animate={{
            filter: [
              "brightness(100%)",
              "brightness(130%)",
              "brightness(100%)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src="logo-new.png"
          alt="Xpense Logo"
        />
      </LogoWrapper>
      <GitHubLinkWrapper>
        {`Stay updated with the latest features and development progress on `}
        <GitHubLink
          href="https://github.com/NikolaNikolov93/Xpense"
          target="_blank"
        >
          GitHub
          <FiGithub size={"1.5em"} />
        </GitHubLink>
        .
      </GitHubLinkWrapper>
    </Container>
  );
};

export default Home;
