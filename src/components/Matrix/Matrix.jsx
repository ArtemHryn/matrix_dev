import { Box } from 'components/Box';
import matrix from 'images/matrix.png';
import coloredmatrix from 'images/coloredMatrix.svg';
import {
  MatrixMonth,
  Matriximg,
  MonthLayout,
  DayLayout,
  MatrixDay,
  YearLayout,
  MatrixYear,
  BottomLayout,
  MatrixBottom,
  ComfortZone,
} from './Matrix.styled';
import { useState } from 'react';
import { checkNum } from 'helper/calculateMatrix';

export const Matrix = ({ day, month, year }) => {
  const [matrixColor, setMatrixColor] = useState(false);
  const data = {
    day: checkNum(day),
    month: checkNum(month),
    year: checkNum(year),
  };

  const calculate = (firstNum, secondNum, thirdNum = 0, fourthNum = 0) => {
    const number =
      checkNum(firstNum) +
      checkNum(secondNum) +
      checkNum(thirdNum) +
      checkNum(fourthNum);
    return checkNum(number);
  };
  data.last = calculate(data.day, data.month, data.year);
  data.comfortZone = calculate(data.day, data.month, data.year, data.last);
  return (
    <>
      <button
        type="button"
        onClick={() => setMatrixColor(!matrixColor)}
        style={{ padding: '10px' }}
      >
        Change Matrix
      </button>
      <Box position="relative">
        <Matriximg src={matrixColor ? coloredmatrix : matrix} alt="matrix" />
        <DayLayout>
          <MatrixDay size={'40px'}>{data.day}</MatrixDay>
          <MatrixDay size={'30px'}>0</MatrixDay>
          <MatrixDay size={'30px'}>0</MatrixDay>
        </DayLayout>
        <MonthLayout>
          <MatrixMonth size={'40px'}>{data.month}</MatrixMonth>
          <MatrixMonth size={'30px'}>{data.month}</MatrixMonth>
          <MatrixMonth size={'30px'}>{data.month}</MatrixMonth>
        </MonthLayout>
        <YearLayout>
          <MatrixYear size={'40px'}>{data.year}</MatrixYear>
          <MatrixYear size={'30px'}>{data.year}</MatrixYear>
          <MatrixYear size={'30px'}>{data.year}</MatrixYear>
        </YearLayout>
        <BottomLayout>
          <MatrixBottom size={'40px'}>{data.last}</MatrixBottom>
          <MatrixBottom size={'30px'}>{data.last}</MatrixBottom>
          <MatrixBottom size={'30px'}>{data.last}</MatrixBottom>
        </BottomLayout>
        <ComfortZone>{data.comfortZone}</ComfortZone>
      </Box>
    </>
  );
};
