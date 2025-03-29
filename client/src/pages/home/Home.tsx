import { FiGithub } from "react-icons/fi";
import {
  Container,
  FeatureSectionElement,
  FeaturesSection,
  GitHubLink,
  GitHubLinkWrapper,
  HeadingAndLogoWrapepr,
  HeadlineButtonsWrapper,
  HeadlineWrapper,
  Logo,
} from "./Home.styles";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { DemoUser } from "../../constants";
import Spinner from "../../components/spinner/Spinner";

const Home = () => {
  const navigate = useNavigate();
  const { mutation } = useLogin(); // Use the login hook

  const handleDemoLogin = () => {
    mutation.mutate(DemoUser, {
      onSuccess: () => {
        navigate("/dashboard");
      },
    });
  };

  return (
    <Container>
      <HeadlineWrapper>
        <HeadingAndLogoWrapepr>
          <h1>Xpense</h1>
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
        </HeadingAndLogoWrapepr>
        <h4>🚧 Currently in Development 🚧</h4>
        <h2>Your Smart Expense Tracker</h2>
        <h3>Effortlessly track, manage, and optimize your spending.</h3>
        <HeadlineButtonsWrapper>
          <Button onClick={() => navigate("/login")}>Log in</Button>
          {mutation.isPending ? (
            <div>
              <h6>
                ⚠️ Note: Initial loading times are slower due to backend hosting
                settings.
              </h6>
              <Spinner />
            </div>
          ) : (
            <Button onClick={handleDemoLogin}>Try Demo Account</Button>
          )}
        </HeadlineButtonsWrapper>
      </HeadlineWrapper>
      <FeaturesSection>
        <FeatureSectionElement>
          <img src="smart-expense-tracking.png" alt="" />
          <h6>Smart Expense Tracking</h6>
        </FeatureSectionElement>
        <FeatureSectionElement>
          <img src="pie-chart-img.png" alt="" />
          <h6>Budget Optimization</h6>
        </FeatureSectionElement>
        <FeatureSectionElement>
          <img src="categorize-expenses.png" alt="" />
          <h6>Categorized Expenses</h6>
        </FeatureSectionElement>
      </FeaturesSection>
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
