import styled from "styled-components";

export const ProfleInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;
export const FormField = styled.div`
  padding: 0.3em;
  display: flex;
  align-items: center;
  gap: 0.5em;

  label {
    width: 120px; /* Set a fixed width for the label */
    text-align: right; /* Align text to the right */
  }

  input {
    flex: 1; /* Allow input to take the remaining space */
    width: 100%; /* Ensure it expands */
    padding: 0.5em;
  }
`;
export const ButtonsSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    width: 100px;
  }
`;
export const StyledUpProfileInfoSuccessMessage = styled.h5`
  color: ${(props) => props.theme.successMessageColor};
`;
export const StyledProfileInfoErrorMessage = styled.h5`
  color: ${(props) => props.theme.errorMessageColor};
`;
