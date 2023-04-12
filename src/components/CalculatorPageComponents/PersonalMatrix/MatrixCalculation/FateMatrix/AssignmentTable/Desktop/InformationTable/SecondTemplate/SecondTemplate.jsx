import React from 'react';
import { Box } from 'components/Box';
import { ElementsList, Name } from './SecondTemplate.styled';
import { Element, MainElement } from '../FirstTemplate/FirstTemplate.styled';

const dotsGradient =
  'linear-gradient(to right,#9072af 10%, rgba(255, 255, 255, 0) 0%);';

const SecondTemplate = ({ name, el1, el2, el3, isKey, ...props }) => {
  return (
    <Box
      py="17px"
      backgroundImage={dotsGradient}
      backgroundPosition="bottom"
      backgroundSize="10px 2px"
      backgroundRepeat="repeat-x"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      {...props}
    >
      <Name>{name}</Name>
      <ElementsList gridGap={isKey ? '21px' : null}>
        <li>
          <Element>{el1}</Element>
        </li>
        <li>
          <Element>{el2}</Element>
        </li>
        {!isKey ? (
          <li>
            <MainElement>{el3}</MainElement>
          </li>
        ) : (
          <li>
            <Element>{el3}</Element>
          </li>
        )}
      </ElementsList>
    </Box>
  );
};

export default SecondTemplate;
