import React from 'react';
import { Box } from 'components/Box';
import { Element, ElementsList, Name } from './FirstTemplate.styled';

const gradient =
  'linear-gradient(89.9deg, rgba(255, 255, 255, 0.7) 9.56%, rgba(251, 244, 255, 0.7) 85.28%);';


const dotsGradient =
  'linear-gradient(to right,#9072af 10%, rgba(255, 255, 255, 0) 0%);';

const FirstTemplate = props => {
  const {
    firstName,
    secondName,
    thrirdName,
    el1,
    el2,
    el3,
    el4,
    el5,
    el6,
    el7,
  } = props;
  return (
    <Box
      backgroundImage={gradient}
      width={['calc((100% - 4px) / 2 )']}
      py={['10px']}
      border={['0.6px solid #72499B']}
      borderRadius={['7px']}
    >
      <Box
        px={['15px']}
        backgroundImage={dotsGradient}
        backgroundPosition="bottom"
        backgroundSize="15px 2px"
        backgroundRepeat="repeat-x"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pb={['6px']}
      >
        <Name>{firstName}</Name>
        <ElementsList>
          <li>
            <Element>{el1}</Element>
          </li>
          <li>
            <Element>{el2}</Element>
          </li>
          <li>
            <Element bg="#F3E8FF">{el3}</Element>
          </li>
        </ElementsList>
      </Box>
      <Box
        px={['15px']}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pb={['8px']}
        pt={['6px']}
      >
        <Name>{secondName}</Name>
        <ElementsList>
          <li>
            <Element>{el4}</Element>
          </li>
          <li>
            <Element>{el5}</Element>
          </li>
          <li>
            <Element bg="#F3E8FF">{el6}</Element>
          </li>
        </ElementsList>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        pr={'15px'}
        pt={['12px']}
        borderTop={['0.6px solid #72499B']}
        borderRadius={['7px']}
      >
        <Name mr={['55px']}>{thrirdName}</Name>
        <Element bg="#F3E8FF">{el7}</Element>
      </Box>
    </Box>
  );
};

export default FirstTemplate;
