import { Box } from 'components/Box';
import React, { useEffect, useState } from 'react';
import HealthCard from './HealthCard/HealthCard';
import { SetCardTypeBtn } from '../HealthMatrix.styled';
import { useMatrix } from 'pages/Calculator';
import { getHealthInfo } from 'helper/calculateMatrix';

const HealthTables = () => {
  const { matrixData } = useMatrix();
  const [cardType, setCardType] = useState('Личная карта здоровья');
  const [list, setList] = useState([]);
  const personal = 'Личная карта здоровья';
  const integral = 'Целостная карта здоровья';

  useEffect(() => {
    const result = getHealthInfo(matrixData);
    setList(result);
  }, [matrixData]);
  return (
    <Box width={[null, null, '900px']} m={'0 auto'}>
      <Box display="flex" mb={['12px', '28px']} justifyContent="space-between">
        <SetCardTypeBtn
          color={cardType === personal ? 'white' : null}
          bg={cardType === personal ? '#765D90' : null}
          boxShadow={cardType === personal ? 'activeBtn' : null}
          onClick={() => setCardType('Личная карта здоровья')}
          mr={['5px', '10px']}
        >
          Личная
        </SetCardTypeBtn>
        <SetCardTypeBtn
          color={cardType === integral ? 'white' : null}
          bg={cardType === integral ? '#765D90' : null}
          boxShadow={cardType === integral ? 'activeBtn' : null}
          onClick={() => setCardType('Целостная карта здоровья')}
        >
          Целостная
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
