import {
  FriendItem,
  OnlineStatus,
  Photo,
  FriendName,
} from '../Friend/Friend.styled';

export const Friend = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendItem key={id}>
      <OnlineStatus isOnline={isOnline}></OnlineStatus>
      <Photo src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

