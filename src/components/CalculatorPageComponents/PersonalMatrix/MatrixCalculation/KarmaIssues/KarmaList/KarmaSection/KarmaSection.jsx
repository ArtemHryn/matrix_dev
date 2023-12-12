import { Box } from 'components/Box';
import KarmaElementInfo from './KarmaElementInfo/KarmaElementInfo';
import { Element, ElementsList, Name, SectionName } from '../KarmaList.styled';

const gradient =
  'linear-gradient(89.9deg, rgba(255, 255, 255, 0.7) 9.56%, rgba(251, 244, 255, 0.7) 85.28%);';

const KarmaSection = ({ section, ...props }) => {
  const { karmaName, info } = section;
  return (
    <Box as="li" display="flex" flexDirection="column" gridGap={[null, null, '10px']} {...props}>
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
      {section.total && (
        <Box
          backgroundImage={gradient}
          border={['0.6px solid #72499B', '1px solid #72499B']}
          borderRadius={['7px', '12px']}
          display="flex"
          justifyContent="space-between"
          py={['19px', '24px']}
          pl={['15px', '30px']}
          pr={['50px', '119px']}
        >
          <Name>{section.total.name}</Name>
          <ElementsList>
            {section.total.keys.map((el, index) => (
              <li key={index}>
                <Element>{el}</Element>
              </li>
            ))}
          </ElementsList>
        </Box>
      )}
    </Box>
  );
};

export default KarmaSection;
