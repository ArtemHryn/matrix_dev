import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Box } from 'components/Box';
import HealthCard from './HealthCard/HealthCard';
import { SetCardTypeBtn } from '../HealthMatrix.styled';
import { useMatrix } from 'pages/Calculator';
import { getHealthInfo } from 'helper/calculateMatrix';

const HealthTables = () => {
  const { i18n, t } = useTranslation('calc');
  const [cardType, setCardType] = useState(1);
  const [list, setList] = useState([]);
  const { matrixData } = useMatrix();

  useEffect(() => {
    const result = getHealthInfo(matrixData, i18n.language);
    setList(result);
  }, [i18n.language, matrixData]);
  return (
    <Box width={[null, null, '900px']} m={'0 auto'}>
      <Box display="flex" mb={['12px', '28px']} justifyContent="space-between">
        <SetCardTypeBtn
          color={cardType === 1 ? 'white' : null}
          bg={cardType === 1 ? '#765D90' : null}
          onClick={() => setCardType(1)}
          mr={['5px', '10px']}
        >
          {t('healthCardTypePersonal')}
        </SetCardTypeBtn>
        <SetCardTypeBtn
          color={cardType === 2 ? 'white' : null}
          bg={cardType === 2 ? '#765D90' : null}
          onClick={() => setCardType(2)}
        >
          {t('healthCardTypeHolistic')}
        </SetCardTypeBtn>
      </Box>
      <ul>
        {list.map(card => (
          <HealthCard key={card.cardName} card={card} cardType={cardType} />
        ))}
      </ul>
    </Box>
  );
};

export default HealthTables;
