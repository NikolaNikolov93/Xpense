import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundText,
  NotFoundImage,
  HomeLink,
} from "./NotFound.styles";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
      <NotFoundText>The page you are looking for does not exist.</NotFoundText>
      <NotFoundImage src="/404-logo.png" alt="404 illustration" />
      <HomeLink to="/">Go back home</HomeLink>
    </NotFoundContainer>
  );
};

export default NotFound;
