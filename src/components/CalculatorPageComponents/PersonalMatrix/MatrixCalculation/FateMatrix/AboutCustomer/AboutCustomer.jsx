import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import { useMatrix } from 'pages/Calculator';

import { Info, Key, NameDate } from './AboutCustomer.styled';
import { checkNum } from 'helper/calculateMatrix';

const gradient =
  'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(249, 237, 255, 0.5) 100%);';

const AboutCustomer = () => {
  const {
    name,
    isGenerated,
    date,
    age: { years, months },
    currentKey,
    setCurrentKey,
    ageList,
  } = useMatrix();
  const { day, month, year } = date;
  const {t} = useTranslation('calc')

  useEffect(() => {
    if (!ageList) {
      return;
    }
    const totalAge = years + months / 12;
    if (totalAge > 78.5 && totalAge <= 80) {
      setCurrentKey(
        `${ageList[63].arcane} - ${ageList[31].arcane} - ${checkNum(
          ageList[63].arcane + ageList[31].arcane
        )}`
      );
      return;
    }
    const result = ageList.findIndex(
      element => element.age > totalAge
    );
    if (result === -1) {
      setCurrentKey(null);
      return;
    }
    const firstKey = ageList[result - 1].arcane;
    if (result <= 32) {
      setCurrentKey(
        `${firstKey} - ${ageList[result + 31].arcane} - ${checkNum(
          firstKey + ageList[result + 31].arcane
        )}`
      );
      return;
    }
    setCurrentKey(
      `${firstKey} - ${ageList[result - 33].arcane} - ${checkNum(
        firstKey + ageList[result - 33].arcane
      )}`
    );
  }, [ageList, months, setCurrentKey, years]);

  return (
    <Box display={[null, null, 'none']} mb={['50px', '70px']}>
      <Box
        backgroundImage={gradient}
        py={['18px']}
        px={['33px']}
        position="relative"
        overflow="hidden"
        borderRadius="17px"
        border="0.8px solid #72499B"
      >
        {!isGenerated && (
          <>
            {' '}
            <Box display="flex" justifyContent="center" alignItems="center">
              {name && (
                <NameDate mr="6px" fontFamily={'main'} fontWeight="700">
                  {name}
                </NameDate>
              )}{' '}
              <NameDate>
                {day}.{month}.{year}
              </NameDate>
            </Box>
            <Box display="flex" justifyContent="center" gridGap="15px">
              <Key>
                {t('aboutCustomerAge')}: <Info>{years}</Info>{' '}
              </Key>
              {currentKey && (
                <Key>
                  {t('aboutCustomerPeriod')}: <Info>{currentKey}</Info>
                </Key>
              )}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default AboutCustomer;
