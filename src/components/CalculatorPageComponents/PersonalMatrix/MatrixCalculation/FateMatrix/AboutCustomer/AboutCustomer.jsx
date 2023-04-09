import React, { useEffect, useState } from 'react';
import { intervalToDuration } from 'date-fns';
import { Box } from 'components/Box';
import { useMatrix } from 'pages/Calculator';

import star from 'images/Calculator/personalMatrix/star.webp';
import { Img, Info, Key, NameDate } from './AboutCustomer.styled';

const gradient =
  'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(249, 237, 255, 0.5) 100%);';

const AboutCustomer = ({ display, mb }) => {
  const { name, isGenerated, date } = useMatrix();
  const { day, month, year } = date;
  const [age, setAge] = useState(null);

  useEffect(() => {
    if (date.day && date.month && date.year) {
      (() => {
        const { years } = intervalToDuration({
          start: new Date(),
          end: new Date(year, month - 1, day),
        });
        setAge(years);
      })();
    }
  }, [date, day, month, year]);

  return (
    <Box display={display} mb={mb}>
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
            <Box display="flex" justifyContent="center">
              <Key mr="8px">
                Период: <Info>10 - 10 - 20</Info>
              </Key>
              <Key>
                Возраст: <Info>{age}</Info>
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
