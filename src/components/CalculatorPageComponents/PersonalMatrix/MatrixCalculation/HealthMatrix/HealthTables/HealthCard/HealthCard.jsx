import { Box } from 'components/Box';
import { useTranslation } from 'react-i18next';
import {
  CardName,
  ChakraElement,
  ChakraTableTitle,
  ChakraText,
  List,
} from '../../HealthMatrix.styled';
import HealthCardElement from './HealthCardElement';

const HealthCard = ({ card }) => {
  const { t } = useTranslation('calc');

  if (Object.keys(card).length === 0) return null;

  const { cardName, columnName, chakraList, total, partners = false } = card;
  return (
    <>
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
              border={index === columnName.length - 1 ? ['none', 'none', 'none'] : null}
            >
              {column}
            </ChakraTableTitle>
          ))}
        </Box>
        <List>
          {chakraList.map((element, index) => (
            <HealthCardElement
              key={element.chakraName}
              index={index}
              partners={partners}
              length={chakraList.length}
              chakraElement={element}
              total={total}
            />
          ))}
          {total && (
            <ChakraElement border={['none', 'none', 'none']}>
              <ChakraText fontFamily="bona">{t('result')}</ChakraText>
              <ChakraText border={['none', 'none', 'none']} minWidth={['225px', '423px', '570px']}>
                {total}
              </ChakraText>
            </ChakraElement>
          )}
        </List>
      </Box>
    </>
  );
};

export default HealthCard;
