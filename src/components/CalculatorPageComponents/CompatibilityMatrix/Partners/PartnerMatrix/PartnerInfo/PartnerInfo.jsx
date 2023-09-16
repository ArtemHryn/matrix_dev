import { Box } from 'components/Box';
import { ageCalculator } from 'helper/ageCalculator';
import { useEffect, useState } from 'react';

import { Age, NameDate } from '../../Partners.styled';
import { useTranslation } from 'react-i18next';

const gradient =
  'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(249, 237, 255, 0.5) 100%);';

const PartnerInfo = ({ date, hideInfo }) => {
  const [age, setAge] = useState(null);
  const { t } = useTranslation('calc');
  const isDateHere = date.day || date.month || date.year;

  useEffect(() => {
    if (!isDateHere) return;
    const { day, month, year } = date;

    setAge(ageCalculator(day, month, year));
  }, [date, hideInfo, isDateHere]);

  return (
    <Box
      backgroundImage={gradient}
      border={['0.8px solid #72499B']}
      borderRadius={['17px']}
      position="relative"
      height={['103px']}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mb={['50px', '40px']}
      width={['100%', '70%', '60%']}
      mx="auto"
    >
      <NameDate>
        {date?.name && (
          <NameDate as="span" mr="6px" fontFamily={'main'}>
            {date.name}
          </NameDate>
        )}
        {isDateHere ? (
          `${date.day}.${date.month}.${date.year}`
        ) : (
          <NameDate as="span" mr="6px" fontFamily={'digits'} fontWeight='400'>
            {`${date.demonMatrix} КОД`}
          </NameDate>
        )}
      </NameDate>
      {hideInfo && (
        <Age>
          {t('aboutCustomerAge')}:{' '}
          <Age as="span" color="secondText">
            {age}
          </Age>
        </Age>
      )}
    </Box>
  );
};

export default PartnerInfo;
