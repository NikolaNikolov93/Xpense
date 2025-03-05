import { FormEvent, useState } from "react";
import Button from "../../components/button/Button";
import { useForm } from "../../hooks/useForm";
import { ProfileInfoTypes } from "../../types/types";
import {
  ButtonsSection,
  FormField,
  ProfleInfoSection,
  StyledForm,
  StyledProfileInfoErrorMessage,
  StyledUpProfileInfoSuccessMessage,
} from "./ProfileInfo.styles";
import { updateUserProfile } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { useUpdateUser } from "../../hooks/useUpdateUser";
import Spinner from "../../components/spinner/Spinner";

const ProfileInfo: React.FC<ProfileInfoTypes> = ({
  currency,
  name,
  totalBalance,
}) => {
  const [isEditModeOff, setIsEditModeOff] = useState(true);
  const dispatch = useDispatch();
  const { formData, handleChange } = useForm({
    initialValues: {
      currency: currency,
      name: name,
      sumToAdd: "",
    },
  });
  const {
    mutate: updateUserMutation,
    isPending,
    isError,
    error,
    isSuccess,
  } = useUpdateUser();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updatedUser = {
      name: formData.name,
      currency: formData.currency,
      totalBalance: totalBalance + Number(formData.sumToAdd),
    };
    dispatch(updateUserProfile(updatedUser));
    updateUserMutation(updatedUser);
    setIsEditModeOff(true);
  };
  return (
    <ProfleInfoSection>
      <StyledForm onSubmit={handleSubmit}>
        <FormField>
          <label>Username:</label>
          <input
            disabled={isEditModeOff}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>Currency:</label>
          <input
            disabled={isEditModeOff}
            type="text"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>Add to balance:</label>
          <input
            disabled={isEditModeOff}
            type="number"
            name="sumToAdd"
            value={formData.sumToAdd}
            onChange={handleChange}
          />
        </FormField>
        <p>{`Current balance is: ${totalBalance} ${currency}`}</p>
        {isError && (
          <StyledProfileInfoErrorMessage>
            {error.message}
          </StyledProfileInfoErrorMessage>
        )}
        {isSuccess && (
          <StyledUpProfileInfoSuccessMessage>
            Your data was updated successfully.
          </StyledUpProfileInfoSuccessMessage>
        )}
        {isPending ? (
          <Spinner />
        ) : (
          <ButtonsSection>
            <Button
              type="button"
              onClick={() => setIsEditModeOff(!isEditModeOff)}
            >
              Edit
            </Button>
            <Button disabled={isEditModeOff} type="submit">
              Save
            </Button>
          </ButtonsSection>
        )}
      </StyledForm>
    </ProfleInfoSection>
  );
};

export default ProfileInfo;
