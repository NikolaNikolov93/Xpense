import { useSelector } from "react-redux";
import { ProfileWrapper } from "./Profile.styles";
import { RootState } from "../../redux/store";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
const Profile = () => {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.user
  );
  if (!isAuthenticated || !user) {
    return <p>Loading user profile...</p>; // Or redirect the user to a login page
  }
  return (
    <ProfileWrapper>
      <ProfileImage profilePicture={user.profilePicture} name={user.name} />
      <ProfileInfo
        name={user.name}
        currency={user.currency}
        totalBalance={user.totalBalance}
      />
    </ProfileWrapper>
  );
};

export default Profile;
