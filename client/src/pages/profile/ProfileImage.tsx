import { MdOutlineEdit } from "react-icons/md";
import {
  ImageSection,
  StyledEditImageButton,
  StyledImage,
} from "./ProfileImage.styles";
import { ProfileImageTypes } from "../../types/types";

const ProfileImage: React.FC<ProfileImageTypes> = ({
  profilePicture,
  userName,
}) => {
  return (
    <ImageSection>
      <StyledImage src={profilePicture}></StyledImage>
      <StyledEditImageButton>
        <MdOutlineEdit />
      </StyledEditImageButton>
      <h3>{userName}</h3>
    </ImageSection>
  );
};

export default ProfileImage;
