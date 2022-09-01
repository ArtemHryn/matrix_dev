import { Box } from './Box';
import { Main } from './UserProfile/Main/Main';
import { Statistics } from './Statistics/Statistics';
import user from 'user.json';
import data from 'data.json'

export const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems='center'
      bg="primary"
      p={4}
    >
      <Main user={user} />
      <Statistics title="upload stats" data={ data } />
    </Box>
  );
};
