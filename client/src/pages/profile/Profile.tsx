import { useSelector } from "react-redux";
import { ProfileWrapper } from "./Profile.styles";
import { RootState } from "../../redux/store";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
const Profile = () => {
  const user = useSelector((state: RootState) => state.user.user); // Access user from Redux store

  return (
    <ProfileWrapper>
      <ProfileImage
        profilePicture={user?.profilePicture}
        userName={user?.name}
      />
      <ProfileInfo
        userName={user?.name}
        currency={user?.currency}
        totalBalance={user?.totalBalance}
      />
    </ProfileWrapper>
  );
};

export default Profile;
