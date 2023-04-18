import React, { useEffect } from 'react';
import { Box } from 'components/Box';
import { useMatrix } from 'pages/Calculator';

import star from 'images/Calculator/personalMatrix/star.webp';
import { Img, Info, Key, NameDate } from './AboutCustomer.styled';
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

  useEffect(() => {
    if (!ageList) {
      return;
    }
    const result = ageList.findIndex(
      element => element.age > years + months / 12
    );
    if (result < 32) {
      setCurrentKey(
        `${ageList[result - 1].arcane} - ${
          ageList[result + 31].arcane
        } - ${checkNum(
          ageList[result - 1].arcane + ageList[result + 31].arcane
        )}`
      );
    }
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
                Возраст: <Info>{years}</Info>{' '}
              </Key>

              <Key>
                Период: <Info>{currentKey}</Info>
              </Key>
            </Box>
          </>
        )}
        <Img src={star} alt="star" />
      </Box>
    </Box>
  );
};

export default AboutCustomer;
