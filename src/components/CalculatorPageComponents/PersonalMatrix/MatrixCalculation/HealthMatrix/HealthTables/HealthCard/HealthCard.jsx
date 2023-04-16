import { Box } from 'components/Box';
import React from 'react';
import {
  CardName,
  ChakraElement,
  ChakraTableTitle,
  ChakraText,
  Exclamation,
  List,
} from '../../HealthMatrix.styled';

const HealthCard = ({ card, cardType }) => {
  const { cardName, columnName, chakraList, total } = card;
  return (
    <>
      {cardType === cardName && (
        <Box as="li">
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
              ({ chakraName, physics, energy, emotions, color }, index) => (
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

                  <ChakraText>{physics}</ChakraText>
                  <ChakraText>{energy}</ChakraText>
                  <ChakraText border={['none', 'none', 'none']}>
                    {emotions}
                  </ChakraText>
                </ChakraElement>
              )
            )}
            {total && (
              <ChakraElement border={['none', 'none', 'none']}>
                <ChakraText fontFamily="bona">Итог</ChakraText>
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
