import { useSelector } from "react-redux";
import { UserBalanceWrapper } from "./UserBalance.styles";
import { RootState } from "../../redux/store";

const UserBalance = () => {
  const user = useSelector((state: RootState) => state.user.user); // Access user from Redux store

  return (
    <UserBalanceWrapper>
      <h4>{`Hello, ${user?.name}!`}</h4>
      <h4>{`Your current total balance is: ${user?.totalBalance} ${user?.currency}`}</h4>
    </UserBalanceWrapper>
  );
};

export default UserBalance;
