import { Box } from 'components/Box';
import { Stats } from '../Stats/Stats';
import {
  Photo,
  UserProfileContainer,
  UserName,
  HowTofind,
} from './Main.styled';
export const Main = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <Box
      bg="white"
      width="boxW"
      border="normal"
      borderRadius="normal"
      borderColor="secondary"
    >
      <UserProfileContainer>
        <Photo src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <HowTofind>@{tag}</HowTofind>
        <HowTofind>{location}</HowTofind>
      </UserProfileContainer>
      <Stats stats={stats}></Stats>
    </Box>
  );
};
