import { Box } from 'components/Box';
import {
  AgeColumnItem,
  AgeColumnList,
  AgeElement,
} from '../../PeriodMatrix.styled';
import { checkNum } from 'helper/calculateMatrix';
import { useEffect, useState } from 'react';

const TableTemplate = ({ main, additional, age: customerAge }) => {
  const [currentArcane, setCurrentArcane] = useState(null);

  useEffect(() => {
    const result = main.findIndex(
      element => element.age > customerAge.years + customerAge.months / 12
    );
    setCurrentArcane(result);
  }, [customerAge, main]);

  return (
    <Box display="flex" justifyContent="space-between">
      <AgeColumnList>
        {main.map(({ age, arcane }, index) => {
          if (index < 16) {
            return (
              <AgeColumnItem
                className={index === currentArcane - 1 && 'active'}
                bg={index % 2 === 0 && '#b49bd145'}
                key={age}
              >
                <AgeElement
                  borderBottom={index === 15 && ['none', 'none', 'none']}
                >
                  {age}
                </AgeElement>{' '}
                <AgeElement
                  flex="3"
                  borderBottom={index === 15 && ['none', 'none', 'none']}
                >{`${arcane} - ${additional[index].arcane} - ${checkNum(
                  arcane + additional[index].arcane
                )}`}</AgeElement>
              </AgeColumnItem>
            );
          }
          return null;
        })}
      </AgeColumnList>
      <AgeColumnList>
        {main.map(({ age, arcane }, index) => {
          if (index >= 16) {
            return (
              <AgeColumnItem
                key={age}
                className={index === currentArcane - 1 && 'active'}
                bg={index % 2 === 0 && '#b49bd145'}
              >
                <AgeElement
                  borderBottom={
                    index === main.length - 1 && ['none', 'none', 'none']
                  }
                >
                  {age}
                </AgeElement>{' '}
                <AgeElement
                  flex="3"
                  borderBottom={
                    index === main.length - 1 && ['none', 'none', 'none']
                  }
                  borderRight={['none', 'none']}
                >{`${arcane} - ${additional[index].arcane} - ${checkNum(
                  arcane + additional[index].arcane
                )}`}</AgeElement>
              </AgeColumnItem>
            );
          }
          return null;
        })}
      </AgeColumnList>
    </Box>
  );
};

export default TableTemplate;
