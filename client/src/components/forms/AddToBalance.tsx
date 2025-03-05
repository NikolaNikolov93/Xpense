import { FormEvent } from "react";
import { useForm } from "../../hooks/useForm";
import { useUpdateUser } from "../../hooks/useUpdateUser";
import Button from "../button/Button";
import { AddToBalanceWrapper, StyledForm } from "./AddToBalance.styles";
import { useDispatch } from "react-redux";
import { updateUserBalance } from "../../redux/userSlice";
import Spinner from "../spinner/Spinner";

type AddToBalanceProps = {
  totalBalance: number;
};

const AddToBalance: React.FC<AddToBalanceProps> = ({ totalBalance }) => {
  const dispatch = useDispatch();
  const { resetForm, handleChange, formData } = useForm({
    initialValues: {
      sumToAdd: "",
    },
  });
  const {
    mutate: updateUserMutation,
    isPending,
    isError,
    isSuccess,
    error,
  } = useUpdateUser();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updatedUser = {
      totalBalance: totalBalance + Number(formData.sumToAdd),
    };
    dispatch(updateUserBalance(updatedUser.totalBalance));
    updateUserMutation(updatedUser);
    resetForm();
  };
  return (
    <AddToBalanceWrapper>
      <h2>Add to balance</h2>
      {isError && <p>{error.message}</p>}
      {isSuccess && <p>Balance updated!</p>}
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="number"
          step={10}
          name="sumToAdd"
          value={formData.sumToAdd}
          onChange={handleChange}
          inputMode="numeric"
          pattern="[0-9]*"
        />
        {isPending ? <Spinner /> : <Button type="submit">Confirm</Button>}
      </StyledForm>
    </AddToBalanceWrapper>
  );
};

export default AddToBalance;
