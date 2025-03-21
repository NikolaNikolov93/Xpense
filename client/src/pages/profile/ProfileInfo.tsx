import { FormEvent, useState } from "react";
import Button from "../../components/button/Button";
import { useForm } from "../../hooks/useForm";
import { ProfileInfoTypes } from "../../types/types";
import {
  ButtonsSection,
  FormField,
  InputError,
  ProfleInfoSection,
  StyledForm,
  StyledProfileInfoErrorMessage,
  StyledUpProfileInfoSuccessMessage,
  ThemeSwticher,
} from "./ProfileInfo.styles";
import { updateUserProfile } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUser } from "../../hooks/useUpdateUser";
import Spinner from "../../components/spinner/Spinner";
import { toggleTheme } from "../../redux/themeSlice";
import { RootState } from "../../redux/store";
import { validateProfileInfoForm } from "../../utils/validateProfileInfoForm";
import { AnimatePresence } from "framer-motion";

const ProfileInfo: React.FC<ProfileInfoTypes> = ({
  currency,
  name,
  totalBalance,
}) => {
  const dispatch = useDispatch();

  //Edit mode state handler
  const [isEditModeOff, setIsEditModeOff] = useState(true);

  //Custom from hanlding hook
  const { formData, handleChange, validateForm, errors } = useForm({
    initialValues: {
      currency: currency,
      name: name,
      sumToAdd: "",
    },
    validate: validateProfileInfoForm,
  });

  //Custom hook for updateing user
  const {
    mutate: updateUserMutation,
    isPending,
    isError,
    error,
    isSuccess,
  } = useUpdateUser();

  //Handle data submiting and updates the Redux state
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const updatedUser = {
        name: formData.name,
        currency: formData.currency,
        totalBalance: totalBalance + Number(formData.sumToAdd),
      };
      dispatch(updateUserProfile(updatedUser));
      updateUserMutation(updatedUser);
      setIsEditModeOff(true);
    }
  };

  //Import theme switching handlers
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <ProfleInfoSection>
      <p>Swtich to {theme === "light" ? "dark theme" : "light theme"}</p>
      <ThemeSwticher onClick={() => handleThemeToggle()}></ThemeSwticher>
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
        <AnimatePresence>
          {errors.name && (
            <InputError
              key="email-error"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {errors.name}
            </InputError>
          )}
        </AnimatePresence>
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
        <AnimatePresence>
          {errors.currency && (
            <InputError
              key="currency-error"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {errors.currency}
            </InputError>
          )}
        </AnimatePresence>
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
        <AnimatePresence>
          {errors.sumToAdd && (
            <InputError
              key="sumbToAdd-error"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {errors.sumToAdd}
            </InputError>
          )}
        </AnimatePresence>
        <p>{`Current balance is: ${totalBalance.toFixed(2)} ${currency}`}</p>
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
