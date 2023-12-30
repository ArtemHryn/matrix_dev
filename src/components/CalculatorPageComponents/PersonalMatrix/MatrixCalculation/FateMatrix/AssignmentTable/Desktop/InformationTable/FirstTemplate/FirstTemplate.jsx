import { Box } from 'components/Box';
import { Element, ElementsList, MainElement, Name } from './FirstTemplate.styled';
import { checkNum } from 'helper/calculateMatrix';

const dotsGradient = 'linear-gradient(to right,#9072af 10%, rgba(255, 255, 255, 0) 0%);';

const FirstTemplate = ({ name1, name2, name3, el1, el2, el3, el4 }) => {
  const sum1 = checkNum(el1 + el2);
  const sum2 = checkNum(el3 + el4);
  const total = checkNum(sum1 + sum2)
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
              <Element>{sum1}</Element>
            </li>
          </ElementsList>
          <ElementsList>
            <li>
              <Name width="50px">{name3}</Name>
            </li>
            <li>
              <Element>{el3}</Element>
            </li>
            <li>
              <Element>{el4}</Element>
            </li>
            <li>
              <Element>{sum2}</Element>
            </li>
          </ElementsList>
        </Box>
        <MainElement as="p">{total}</MainElement>
      </Box>
    </Box>
  );
};

export default FirstTemplate;
