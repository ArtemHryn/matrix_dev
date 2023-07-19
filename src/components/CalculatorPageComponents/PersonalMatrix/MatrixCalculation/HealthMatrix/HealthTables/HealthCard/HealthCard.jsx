import { Box } from 'components/Box';
import { useTranslation } from 'react-i18next';
import {
  CardName,
  ChakraElement,
  ChakraTableTitle,
  ChakraText,
  Exclamation,
  List,
} from '../../HealthMatrix.styled';

const HealthCard = ({ card, cardType }) => {
  const { t } = useTranslation('calc');
  const {
    cardName,
    columnName,
    chakraList,
    total,
    id,
    partners = false,
  } = card;
  return (
    <>
      {cardType === id && (
        <Box>
          <CardName>{cardName}</CardName>
          <Box
            display="flex"
            bg="rgba(255, 255, 255, 0.7)"
            border={['0.5px solid #72499B']}
            borderRadius={['7px', '13px']}
            mb={['3px', '6px']}
          >
            <ChakraTableTitle flex="2">Чакра</ChakraTableTitle>
            {columnName.map((column, index) => (
              <ChakraTableTitle
                key={column}
                border={
                  index === columnName.length - 1
                    ? ['none', 'none', 'none']
                    : null
                }
              >
                {column}
              </ChakraTableTitle>
            ))}
          </Box>
          <List>
            {chakraList.map(
              (
                {
                  chakraName,
                  physics,
                  energy,
                  emotions,
                  color,
                  partner1,
                  partner2,
                  couple,
                },
                index
              ) => (
                <ChakraElement
                  key={chakraName}
                  border={
                    index === chakraList.length - 1 && !total
                      ? ['none', 'none', 'none']
                      : null
                  }
                >
                  <Exclamation bg={color}>!</Exclamation>
                  <ChakraText
                    flex="2"
                    justifyContent="flex-start"
                    fontFamily="bona"
                  >
                    {chakraName}
                  </ChakraText>

                  <ChakraText>{partners ? partner2 : energy}</ChakraText>
                  <ChakraText>{partners ? partner1 : physics}</ChakraText>
                  <ChakraText border={['none', 'none', 'none']}>
                    {partners ? couple : emotions}
                  </ChakraText>
                </ChakraElement>
              )
            )}
            {total && (
              <ChakraElement border={['none', 'none', 'none']}>
                <ChakraText fontFamily="bona">{t('result')}</ChakraText>
                <ChakraText
                  border={['none', 'none', 'none']}
                  minWidth={['225px', '423px', '570px']}
                >
                  {total}
                </ChakraText>
              </ChakraElement>
            )}
          </List>
        </Box>
      )}
    </>
  );
};

export default HealthCard;
