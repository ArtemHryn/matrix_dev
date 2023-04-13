import { Box } from 'components/Box';
import React from 'react';
import KarmaSection from './KarmaSection/KarmaSection';

const KarmaList = ({ list }) => {
  return (
    <Box as="ul">
      {list.map(section => (
        <KarmaSection key={section.karmaName} section={section} />
      ))}
    </Box>
  );
};

export default KarmaList;
