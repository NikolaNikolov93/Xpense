import styled from "styled-components";

export const ImageSection = styled.div`
  width: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const StyledImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;
export const StyledEditImageButton = styled.div`
  position: absolute;
  top: 20px;
  right: -5px;
  color: black;
  overflow: hidden;
  background-color: var(--primary-text-color);
  border-radius: 50%;

  padding: 0.2em;
  cursor: pointer;
  font-size: 1.5em;
`;
