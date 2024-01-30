import { useRef } from 'react';
import { checkNum } from 'helper/calculateMatrix';
import { AgeColumnItem, AgeElement, PeriodTip } from '../../PeriodMatrix.styled';
import { OverlayPanel } from 'primereact/overlaypanel';
import { addMonths, format } from 'date-fns';

const AgeRowElementSecond = ({
  index,
  currentArcane,
  age,
  arcane,
  additional,
  main,
  date,
  isGenerated,
}) => {
  const op = useRef(null);

  const addMonthsToDate = ({ day, month, year }, yearsToAdd) => {
    const convertDate = new Date(year, month - 1, day);
    const newDate = addMonths(convertDate, yearsToAdd * 12);
    return format(newDate, 'dd.MM.yyyy');
  };

  return (
    <AgeColumnItem
      className={index === currentArcane && 'active'}
      bg={index % 2 === 0 && '#b49bd145'}
      onMouseEnter={e => !isGenerated && op.current.toggle(e)}
      onMouseLeave={e => !isGenerated && op.current.toggle(e)}
    >
      <AgeElement borderBottom={index === main.length - 1 && ['none', 'none', 'none']}>
        {age}
      </AgeElement>{' '}
      <AgeElement
        flex="3"
        borderBottom={index === main.length - 1 && ['none', 'none', 'none']}
        borderRight={['none', 'none']}
      >{`${arcane} - ${additional[index].arcane} - ${checkNum(
        arcane + additional[index].arcane
      )}`}</AgeElement>
      {!isGenerated && (
        <OverlayPanel ref={op}>
          <PeriodTip>
            {addMonthsToDate(date, age)} - {addMonthsToDate(date, +age + 1.25)}
          </PeriodTip>
        </OverlayPanel>
      )}
    </AgeColumnItem>
  );
};

export default AgeRowElementSecond;
