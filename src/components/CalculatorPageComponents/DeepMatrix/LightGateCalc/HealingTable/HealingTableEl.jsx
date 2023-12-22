import { useState } from 'react';
import { Box } from 'components/Box';
import {
  HealingKey,
  HealingKeysList,
  HealingKeysListEl,
  HealingRowName,
  HealingRowNameList,
  HealingRowNameListEl,
} from './HealingTable.styled';

const HealingTableEl = ({ table }) => {
  const [isKeysListVisible, setIsKeysListVisible] = useState(false);
  const { rowName, keys } = table;

  return (
    <Box
      display="flex"
      flexDirection="column"
      gridGap={['10px']}
      width={[null, null, 'calc((100% - 16px) / 2)']}
    >
      <HealingRowNameList onClick={() => setIsKeysListVisible(prev => !prev)}>
        {rowName.map((el, index) => (
          <HealingRowNameListEl key={index} borderLeft={index === 0 ? 'none' : null}>
            <HealingRowName>{el}</HealingRowName>
          </HealingRowNameListEl>
        ))}
      </HealingRowNameList>

      <HealingKeysList
        variants={{
          visible: {
            maxHeight: '1000px',
            opacity: 1,
            y: 0,
            pointerEvents: 'all',
            transition: { duration: 0.5, ease: 'easeInOut' },
          },
          hidden: {
            maxHeight: '0',
            opacity: 0,
            y: -10,
            pointerEvents: 'none',
            transition: { duration: 0.5, ease: 'easeInOut' },
          },
        }}
        initial="hidden"
        animate={isKeysListVisible ? 'visible' : 'hidden'}
      >
        {keys.map((el, index) => (
          <HealingKeysListEl key={index} borderTop={index === 0 ? 'none' : null}>
            <HealingKey border="none">{index + 1}</HealingKey>
            <HealingKey>{el.youngKey}</HealingKey>
            <HealingKey>{index + 1}</HealingKey>
            <HealingKey>{el.oldKey}</HealingKey>
          </HealingKeysListEl>
        ))}
      </HealingKeysList>
    </Box>
  );
};

export default HealingTableEl;
