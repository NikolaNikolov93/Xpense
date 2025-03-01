import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import { UserBalanceWrapper } from "./UserBalance.styles"; // Import styled component for layout
import { RootState } from "../../redux/store"; // Import RootState type for type safety

const UserBalance = () => {
  // Access the user data from Redux store with type safety
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <UserBalanceWrapper>
      {/* Display a greeting message with the user's name */}
      <h4>{`Hello, ${user?.name}!`}</h4>
      {/* Display the user's total balance, formatted to 2 decimal places */}
      <h4>
        {`Your current total balance is: ${user?.totalBalance.toFixed(2)} ${
          user?.currency
        }`}
      </h4>
    </UserBalanceWrapper>
  );
};

export default UserBalance;
