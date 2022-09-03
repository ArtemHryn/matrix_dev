import { TableEl, TableRow } from "./Transaction.styled";

export const Transaction = ({ id, type, amount, currency, index }) => {
  return (
    <TableRow key={id} index={index}>
      <TableEl>{type}</TableEl>
      <TableEl>{amount}</TableEl>
      <TableEl>{currency}</TableEl>
    </TableRow>
  );
};