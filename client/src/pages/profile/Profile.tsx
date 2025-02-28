import { useSelector } from "react-redux";
import {
  ImageSection,
  ProfileWrapper,
  StyledEditImageButton,
  StyledImage,
} from "./Profile.styles";
import { RootState } from "../../redux/store";
import { MdOutlineEdit } from "react-icons/md";
const Profile = () => {
  const user = useSelector((state: RootState) => state.user.user); // Access user from Redux store

  return (
    <ProfileWrapper>
      <ImageSection>
        <StyledImage src={user?.profilePicture}></StyledImage>
        <StyledEditImageButton>
          <MdOutlineEdit />
        </StyledEditImageButton>
        <h3>{user?.name}</h3>
      </ImageSection>
    </ProfileWrapper>
  );
};

export default Profile;
