import { Box } from 'components/Box';
import { Element, ElementsList, Name } from '../FirstTemplate/FirstTemplate.styled';

const gradient =
  'linear-gradient(89.9deg, rgba(255, 255, 255, 0.7) 9.56%, rgba(251, 244, 255, 0.7) 85.28%);';

const SecondsTemplate = ({ name, el1, el2, el3 }) => {
  return (
    <Box
      backgroundImage={gradient}
      width={['calc((100% - 4px) / 2 )', 'calc((100% - 8px) / 2 )']}
      py={['12px', '23px']}
      border={['0.6px solid #72499B', '1px solid #72499B']}
      borderRadius={['7px', '12px']}
      display="flex"
      justifyContent="space-between"
      px={['13px', '26px']}
    >
      <Name>{name}</Name>
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
  );
};

export default SecondsTemplate;
