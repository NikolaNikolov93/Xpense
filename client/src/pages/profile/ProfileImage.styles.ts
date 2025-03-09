import styled from "styled-components";

export const ImageSection = styled.div`
  max-width: 170px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;
export const StyledEditImageButton = styled.div`
  position: absolute;
  top: 20px;
  right: -5px;
  color: var(--primary-text-color);
  overflow: hidden;
  background-color: ${(props) => props.theme.secondaryAccentColor};
  border-radius: 50%;
  padding: 0.2em;
  cursor: pointer;
  font-size: 1.5em;
`;
export const HiddenFileInput = styled.input`
  display: none;
`;
export const StyledUploadImmageSuccessMessage = styled.h5`
  color: ${(props) => props.theme.successMessageColor};
`;
export const StyledUploadImmageErrorMessage = styled.h5`
  color: ${(props) => props.theme.errorMessageColor};
`;
