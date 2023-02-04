import { Box } from 'components/Box';
import { Price, BuyButton } from './Buy.styled';

export const BuyContainer = ({ price }) => {
  return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent={['space-between', 'flex-start']}
        pt={['25px', '40px']}
      >
        <Price>{price}</Price>
        <BuyButton href="https://t.me/DariKarma">Купить</BuyButton>
      </Box>
  );
};
