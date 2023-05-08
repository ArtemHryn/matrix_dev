import { Box } from 'components/Box';
import KarmaSection from './KarmaSection/KarmaSection';

const KarmaList = ({ list }) => {
  return (
    <Box as="ul">
      {list.map((section, index) => (
        <KarmaSection
          key={section.karmaName}
          section={section}
          mb={index === list.lenght - 1 ? '0px' : ['15px', '27px', '37px']}
        />
      ))}
    </Box>
  );
};

export default KarmaList;
