import { MdOutlineEdit } from "react-icons/md";
import {
  HiddenFileInput,
  ImageSection,
  StyledEditImageButton,
  StyledImage,
  StyledUploadImmageErrorMessage,
  StyledUploadImmageSuccessMessage,
} from "./ProfileImage.styles";
import { ProfileImageTypes } from "../../types/types";
import { useDispatch } from "react-redux";
import { useUpdateUserProfilePicture } from "../../hooks/useUpdateUserProfilePicture";
import Spinner from "../../components/spinner/Spinner";
import { handleImageUpload } from "../../utils/uploadImage";

const ProfileImage: React.FC<ProfileImageTypes> = ({
  profilePicture,
  name,
}) => {
  const dispatch = useDispatch(); // Initialize dispatch
  const { mutate, isPending, isError, error, isSuccess } =
    useUpdateUserProfilePicture(); // Call the custom hook that hnadles the image upload

  const triggerFileInput = () => {
    document.getElementById("fileInput")?.click();
  };
  if (isPending) return <Spinner />;
  return (
    <ImageSection>
      <StyledImage
        src={profilePicture != "" ? profilePicture : "profile-default2.png"}
      ></StyledImage>
      <StyledEditImageButton onClick={triggerFileInput}>
        <MdOutlineEdit />
      </StyledEditImageButton>
      <HiddenFileInput
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={(event) => handleImageUpload(event, dispatch, mutate)} // Updates the state and uploads the image to the DB
      />
      <h3>{name}</h3>
      {isSuccess && (
        <StyledUploadImmageSuccessMessage>
          Your image has been updated successfully.
        </StyledUploadImmageSuccessMessage>
      )}
      {isError && (
        <StyledUploadImmageErrorMessage>
          {error.message}
        </StyledUploadImmageErrorMessage>
      )}
    </ImageSection>
  );
};

export default ProfileImage;
