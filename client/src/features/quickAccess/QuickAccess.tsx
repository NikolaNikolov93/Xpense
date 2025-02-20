import Button from "../../components/button/Button";
import { ActionsWrapper, QuickAccessWrapper } from "./QuickAccess.styles";

const QuickAccess = () => {
  return (
    <QuickAccessWrapper>
      <h3>Quick Access</h3>
      <ActionsWrapper>
        <Button>Add expense</Button>
        <Button>Generate report</Button>
      </ActionsWrapper>
    </QuickAccessWrapper>
  );
};

export default QuickAccess;
