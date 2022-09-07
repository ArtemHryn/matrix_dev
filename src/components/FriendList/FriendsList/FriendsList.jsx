import PropTypes from 'prop-types';
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


FriendListEl.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })),
}