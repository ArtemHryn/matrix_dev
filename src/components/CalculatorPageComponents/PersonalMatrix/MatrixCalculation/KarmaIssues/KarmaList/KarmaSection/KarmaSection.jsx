import { Box } from 'components/Box';
import KarmaElementInfo from './KarmaElementInfo/KarmaElementInfo';
import { SectionName } from '../KarmaList.styled';

const KarmaSection = ({ section, ...props }) => {
  const { karmaName, info } = section;
  return (
    <Box as="li" {...props}>
      <SectionName>{karmaName}</SectionName>
      <Box as="ul" display={[null, null, 'flex']}>
        {info.map((infoEl, index) => (
          <KarmaElementInfo
            key={infoEl.type}
            infoEl={infoEl}
            mr={index === info.length - 1 ? [null] : [null, null, '6px']}
          />
        ))}
      </Box>
    </Box>
  );
};

export default KarmaSection;
