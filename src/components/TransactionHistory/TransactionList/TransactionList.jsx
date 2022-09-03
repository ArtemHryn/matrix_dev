import { Box } from 'components/Box';
import { TransactionsHeader } from '../TransactionsHeader/TransactionsHeader';
import { Transaction } from '../Transaction/Transaction';
import { Table } from './TransactionList.styled';

export const TransactionList = ({ transactions }) => {
  return (
    <Table>
      <TransactionsHeader />
      <Box as="tbody">
        {transactions.map(({ id, type, amount, currency }, index) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
            index={index}
          />
        ))}
      </Box>
    </Table>
  );
};
