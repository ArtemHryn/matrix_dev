import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import { Price, BuyButton } from './Buy.styled';

export const BuyContainer = ({ price }) => {
  const { t } = useTranslation('modals');
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={['space-between', 'flex-start']}
      pt={['25px', '40px']}
    >
      <Price>{price}</Price>
      <BuyButton href="https://t.me/DariKarma">{t('buy')}</BuyButton>
    </Box>
  );
};
