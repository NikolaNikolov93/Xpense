import {
  Container,
  FeatureSectionElement,
  FeaturesSection,
  HeadingAndLogoWrapepr,
  HeadlineButtonsWrapper,
  HeadlineWrapper,
  Logo,
  SiteShowcase,
  SiteShowcaseItem,
} from "./Home.styles";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { DemoUser } from "../../constants";
import Spinner from "../../components/spinner/Spinner";
import Footer from "../../features/footer/Footer";

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
        <h2>Effortlessly track, manage, and optimize your spending.</h2>
        <HeadlineButtonsWrapper>
          {/* <Button onClick={() => navigate("/login")}>Log in</Button> */}
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
          <h4>Smart Expense Tracking</h4>
        </FeatureSectionElement>
        <FeatureSectionElement>
          <img src="pie-chart-img.png" alt="" />
          <h4>Budget Optimization</h4>
        </FeatureSectionElement>
        <FeatureSectionElement>
          <img src="categorize-expenses.png" alt="" />
          <h4>Categorized Expenses</h4>
        </FeatureSectionElement>
      </FeaturesSection>
      <SiteShowcase>
        <SiteShowcaseItem>
          <img src="piecharts.png" alt="" />
          <div>
            <h2>The Whole picture</h2>
            <h4>
              One report to give a clear view on your spending patterns.
              Understand where your money comes and goes with easy-to-read
              graphs.
            </h4>
          </div>
        </SiteShowcaseItem>
        <SiteShowcaseItem>
          <img src="recent-expenses.png" alt="" />
          <div>
            <h2>Simple money tracker</h2>
            <h4>
              It takes seconds to record daily transactions. Put them into clear
              and visualized categories such as Expense: Food, Shopping or
              Income: Salary, Gift.
            </h4>
          </div>
        </SiteShowcaseItem>
        <SiteShowcaseItem>
          <img src="generate-report.png" alt="" />
          <div>
            <h2>Generate specific report</h2>
            <h4>
              Filter and sort your expenses to generate a detailed report. Gain
              insights into your spending habits and make informed financial
              decisions with ease.
            </h4>
          </div>
        </SiteShowcaseItem>
      </SiteShowcase>
      <Footer />
    </Container>
  );
};

export default Home;
