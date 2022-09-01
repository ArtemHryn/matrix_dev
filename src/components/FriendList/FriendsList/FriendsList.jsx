import { Friend } from '../Friend/Friend';
import { FriendListEl } from './FriendsList.styled';


export const FriendList = ({ friends }) => {
  return (
    <FriendListEl>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend avatar={avatar} name={name} isOnline={isOnline} key={id} />
      ))}
    </FriendListEl>
  );
};
