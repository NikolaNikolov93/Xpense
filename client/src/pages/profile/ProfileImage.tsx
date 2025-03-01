import { MdOutlineEdit } from "react-icons/md";
import {
  ImageSection,
  StyledEditImageButton,
  StyledImage,
} from "./ProfileImage.styles";
import { ProfileImageTypes } from "../../types/types";

const ProfileImage: React.FC<ProfileImageTypes> = ({
  profilePicture,
  name,
}) => {
  return (
    <ImageSection>
      <StyledImage src={profilePicture}></StyledImage>
      <StyledEditImageButton>
        <MdOutlineEdit />
      </StyledEditImageButton>
      <h3>{name}</h3>
    </ImageSection>
  );
};

export default ProfileImage;
