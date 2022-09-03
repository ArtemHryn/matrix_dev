import { Box } from './Box';
import { Main } from './UserProfile/Main/Main';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendsList/FriendsList';
import { TransactionList } from './TransactionHistory/TransactionList/TransactionList';
import GlobalStyle from './Global';
import user from 'user.json';
import data from 'data.json'
import friends from 'friends.json'
import transactions from 'transactions.json'

export const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="primary"
      p={4}
    >
      <GlobalStyle />
      <Main user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionList transactions={transactions} />
    </Box>
  );
};
