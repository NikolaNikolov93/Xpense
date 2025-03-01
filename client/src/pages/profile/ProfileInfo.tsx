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

const ProfileInfo: React.FC<ProfileInfoTypes> = ({
  currency,
  userName,
  totalBalance,
}) => {
  const [isEditModeOff, setIsEditModeOff] = useState(true);
  const { formData, handleChange } = useForm({
    initialValues: {
      currency: currency,
      userName: userName,
      totalBalance: totalBalance,
    },
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("User data Changed:", formData);
  };
  return (
    <ProfleInfoSection>
      <StyledForm onSubmit={handleSubmit}>
        <FormField>
          <label>Username:</label>
          <input
            disabled={isEditModeOff}
            type="text"
            name="userName"
            value={formData.userName}
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
          <label>Total Balance:</label>
          <input
            disabled={isEditModeOff}
            type="number"
            name="totalBalance"
            value={formData.totalBalance}
            onChange={handleChange}
          />
        </FormField>
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
