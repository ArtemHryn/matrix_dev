import { Box } from 'components/Box';
import React from 'react';
import KarmaElementInfo from './KarmaElementInfo/KarmaElementInfo';
import { SectionName } from '../KarmaList.styled';

const KarmaSection = ({ section }) => {
  const { karmaName, info } = section;
  return (
    <Box as="li" pb='15px'>
      <SectionName>{karmaName}</SectionName>
      <ul>
        {info.map(infoEl => (
          <KarmaElementInfo key={infoEl.type} infoEl={infoEl} />
        ))}
      </ul>
    </Box>
  );
};

export default KarmaSection;
