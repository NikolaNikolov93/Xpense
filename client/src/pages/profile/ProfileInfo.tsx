import { FormEvent, useState } from "react";
import Button from "../../components/button/Button";
import { useForm } from "../../hooks/useForm";
import { ProfileInfoTypes } from "../../types/types";
import {
  ButtonsSection,
  FormField,
  ProfleInfoSection,
  StyledForm,
} from "./ProfileInfo.styles";
import { updateUserProfile } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { updateUser } from "../../services/authService";

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
      totalBalance: 0,
    },
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updatedUser = {
      name: formData.name,
      currency: formData.currency,
      totalBalance: totalBalance + Number(formData.totalBalance),
    };
    dispatch(updateUserProfile(updatedUser));
    updateUser(updatedUser);
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
            name="totalBalance"
            value={formData.totalBalance}
            onChange={handleChange}
          />
        </FormField>
        <p>{`Current balance is: ${totalBalance} ${currency}`}</p>
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
      </StyledForm>
    </ProfleInfoSection>
  );
};

export default ProfileInfo;
