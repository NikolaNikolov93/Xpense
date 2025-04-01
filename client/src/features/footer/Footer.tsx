import { FooterWrapper, GitHubLink } from "./Footer.styles";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <FooterWrapper>
      {`Stay updated with the latest features and development progress on `}
      <GitHubLink
        href="https://github.com/NikolaNikolov93/Xpense"
        target="_blank"
      >
        GitHub
        <FiGithub size={"1.5em"} />
      </GitHubLink>
      .
    </FooterWrapper>
  );
};

export default Footer;
