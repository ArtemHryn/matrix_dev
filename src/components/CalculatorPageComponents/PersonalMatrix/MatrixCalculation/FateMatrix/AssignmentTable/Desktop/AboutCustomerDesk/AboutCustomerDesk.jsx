import { Box } from 'components/Box';
import { intervalToDuration } from 'date-fns';
import { useMatrix } from 'pages/Calculator';
import React, { useEffect, useState } from 'react';
import {
  Info,
  Key,
  NameDate,
} from '../../../AboutCustomer/AboutCustomer.styled';

const gradient =
  'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(249, 237, 255, 0.5) 100%)';

const AboutCustomerDesk = () => {
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
    <Box
      mb="10px"
      py={['20px']}
      px={['25px']}
      borderRadius="17px"
      border="0.8px solid #72499B"
      backgroundImage={gradient}
    >
      <Box display="flex" justifyContent="center" alignItems="center" mb="6px">
        {!isGenerated && (
          <>
            {name && (
              <NameDate
                mr="6px"
                fontSize={[null, null, '27px']}
                fontFamily={[null, null, 'main']}
                fontWeight={[null, null, '700']}
              >
                {name}
              </NameDate>
            )}
          </>
        )}
        <NameDate fontSize={[null, null, '27px']}>
          {day}.{month}.{year}
        </NameDate>
      </Box>
      <Box display="flex" justifyContent="center">
        <Key fontSize={[null, null, '20px']}>
          Возраст: <Info fontSize={[null, null, '17px']}>{age}</Info>
        </Key>
      </Box>
    </Box>
  );
};

export default AboutCustomerDesk;
