import { StyledSpinner } from "./Spinner.styles";
import { ImSpinner2 } from "react-icons/im";

const Spinner = () => {
  return (
    <StyledSpinner
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    >
      <ImSpinner2 />
    </StyledSpinner>
  );
};

export default Spinner;
