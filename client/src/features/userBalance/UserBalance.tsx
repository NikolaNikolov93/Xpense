import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import { UserBalanceWrapper } from "./UserBalance.styles"; // Import styled component for layout
import { RootState } from "../../redux/store"; // Import RootState type for type safety
import Button from "../../components/button/Button";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import AddToBalance from "../../components/forms/AddToBalance";

const UserBalance = () => {
  // Access the user data from Redux store with type safety
  const user = useSelector((state: RootState) => state.user.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <UserBalanceWrapper>
      {user && (
        <>
          <h4>{`Hello, ${user?.name}!`}</h4>
          <h4>
            {`Your current total balance is: ${user?.totalBalance.toFixed(2)} ${
              user?.currency
            }`}
          </h4>
          <Button onClick={() => setIsModalOpen(true)}>Add to balance</Button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <AddToBalance totalBalance={user?.totalBalance} />
          </Modal>
        </>
      )}
    </UserBalanceWrapper>
  );
};

export default UserBalance;
