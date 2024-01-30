import { Box } from 'components/Box';
import { AgeColumnList } from '../../PeriodMatrix.styled';
import { useEffect, useState } from 'react';
import AgeRowElement from './AgeRowElement';
import AgeRowElementSecond from './AgeRowElementSecond';
import { useMatrix } from 'pages/Calculator';

const TableTemplate = ({ main, additional, age: customerAge }) => {
  const { date, isGenerated } = useMatrix();
  const [currentArcane, setCurrentArcane] = useState(null);
  useEffect(() => {
    const fullAge = customerAge.years + customerAge.months / 12;
    if (fullAge > 38.75 && fullAge < 40 && main[main.length - 1].age < 40) {
      setCurrentArcane(main.length - 1);
      return;
    }
    const result = main.findIndex(element => element.age > fullAge);
    setCurrentArcane(result - 1);
  }, [customerAge, main]);
  return (
    <Box display="flex" justifyContent="space-between">
      <AgeColumnList>
        {main.map(({ age, arcane }, index) => {
          if (index < 16) {
            return (
              <AgeRowElement
                key={age}
                age={age}
                arcane={arcane}
                index={index}
                currentArcane={currentArcane}
                additional={additional}
                date={date}
                isGenerated={isGenerated}
              />
            );
          }
          return null;
        })}
      </AgeColumnList>
      <AgeColumnList>
        {main.map(({ age, arcane }, index) => {
          if (index >= 16) {
            return (
              <AgeRowElementSecond
                key={age}
                age={age}
                arcane={arcane}
                index={index}
                currentArcane={currentArcane}
                additional={additional}
                main={main}
                date={date}
                isGenerated={isGenerated}
              />
            );
          }
          return null;
        })}
      </AgeColumnList>
    </Box>
  );
};

export default TableTemplate;
