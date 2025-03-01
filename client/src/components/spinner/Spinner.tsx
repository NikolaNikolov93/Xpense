import { StyledSpinner } from "./Spinner.styles"; // Import the styled spinner component
import { ImSpinner2 } from "react-icons/im"; // Import the spinner icon from react-icons

// Spinner component - A reusable component that renders a rotating spinner icon
const Spinner: React.FC = () => {
  return (
    <StyledSpinner
      animate={{ rotate: 360 }} // Animation: continuously rotate the spinner 360 degrees
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }} // Animation settings: loop infinitely, take 1 second per rotation, and use linear easing
    >
      <ImSpinner2 /> {/* Render the spinner icon */}
    </StyledSpinner>
  );
};

export default Spinner;
