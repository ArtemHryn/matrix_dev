import { Header } from './TransactionsHeader.styled';

export const TransactionsHeader = () => {
  return (
    <thead>
      <tr>
        <Header>Type</Header>
        <Header>Amount</Header>
        <Header>Currency</Header>
      </tr>
    </thead>
  );
};
