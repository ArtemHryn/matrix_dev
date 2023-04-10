import { Box } from 'components/Box';
import React from 'react';
import { Element, ElementsList, MainElement, Name } from './FirstTemplate.styled';

const dotsGradient =
  'linear-gradient(to right,#9072af 10%, rgba(255, 255, 255, 0) 0%);';

const FirstTemplate = ({
  name1,
  name2,
  name3,
  el1,
  el2,
  el3,
  el4,
  el5,
  el6,
  el7,
}) => {
  return (
    <Box
      py="12px"
      backgroundImage={dotsGradient}
      backgroundPosition="bottom"
      backgroundSize="10px 2px"
      backgroundRepeat="repeat-x"
    >
      <Name fontWeight="500" fontSize="21px" mb="15px">
        {name1}
      </Name>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <ElementsList mb="8px">
            <li>
              <Name width="50px">{name2}</Name>
            </li>
            <li>
              <Element>{el1}</Element>
            </li>
            <li>
              <Element>{el2}</Element>
            </li>
            <li>
              <Element>{el3}</Element>
            </li>
          </ElementsList>
          <ElementsList>
            <li>
              <Name width="50px">{name3}</Name>
            </li>
            <li>
              <Element>{el4}</Element>
            </li>
            <li>
              <Element>{el5}</Element>
            </li>
            <li>
              <Element>{el6}</Element>
            </li>
          </ElementsList>
        </Box>
        <MainElement as="p">{el7}</MainElement>
      </Box>
    </Box>
  );
};

export default FirstTemplate;
