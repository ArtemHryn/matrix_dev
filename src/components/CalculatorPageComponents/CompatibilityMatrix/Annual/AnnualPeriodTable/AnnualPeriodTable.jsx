import { Box } from 'components/Box';
import { getAnnualPeriodData } from 'helper/calculateMatrix';
import { useEffect } from 'react';
import { KeyText, PeriodCircle, TableTitle } from './AnnualPeriodTable.styled';
import {
  AgeColumnName,
  AgeColumnNameText,
} from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/PeriodMatrix/PeriodMatrix.styled';
import { AgeColumnList } from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/PeriodMatrix/PeriodMatrix.styled';
import { AgeColumnItem } from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/PeriodMatrix/PeriodMatrix.styled';

const AnnualPeriodTable = ({
  resultData,
  matrixYear,
  tableInfo,
  setTableInfo,
}) => {
  useEffect(() => {
    const {
      day,
      topLeft1,
      month,
      topRight1,
      year,
      bottomRight1,
      bottom1,
      bottomLeft1,
    } = resultData;
    const info = getAnnualPeriodData(
      {
        day,
        topLeft1,
        month,
        topRight1,
        year,
        bottomRight1,
        bottom1,
        bottomLeft1,
      },
      matrixYear
    );

    setTableInfo(info);
  }, [resultData, matrixYear, setTableInfo]);

  return (
    <Box maxWidth="900px" margin="0 auto">
      <TableTitle>Периоды года</TableTitle>
      <Box
        as="ul"
        display="flex"
        bg="rgba(255, 255, 255, 0.7)"
        border={['0.6px solid #72499B']}
        height={['36px', '50px']}
        borderRadius={['8px']}
        alignItems="center"
        justifyContent="space-between"
        mb={['4px']}
      >
        <AgeColumnName flex="3">
          <AgeColumnNameText>Период</AgeColumnNameText>
        </AgeColumnName>
        <AgeColumnName>
          <AgeColumnNameText>Ключ</AgeColumnNameText>
        </AgeColumnName>
        <AgeColumnName flex="3">
          <AgeColumnNameText>Период</AgeColumnNameText>
        </AgeColumnName>
        <AgeColumnName border={['none', 'none', 'none']}>
          <AgeColumnNameText>Ключ</AgeColumnNameText>
        </AgeColumnName>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        border={['0.6px solid #72499B']}
        borderRadius="13px"
        bg="rgba(255, 255, 255, 0.4)"
      >
        <AgeColumnList>
          {tableInfo.map(({ color, range, arcane, key }, index) => {
            if (index <= 7) {
              return (
                <AgeColumnItem key={range}>
                  <KeyText
                    flex="3"
                    color="text"
                    borderBottom={index === 7 && ['none', 'none', 'none']}
                  >
                    <PeriodCircle bg={color}> </PeriodCircle>
                    {range}
                  </KeyText>
                  <KeyText
                    borderBottom={index === 7 && ['none', 'none', 'none']}
                  >
                    {key}
                  </KeyText>
                </AgeColumnItem>
              );
            }
            return null;
          })}
        </AgeColumnList>
        <AgeColumnList>
          {tableInfo.map(({ color, range, arcane, key }, index) => {
            if (index > 7) {
              return (
                <AgeColumnItem key={range}>
                  <KeyText
                    flex="3"
                    color="text"
                    borderBottom={
                      index === tableInfo.length - 1 && ['none', 'none', 'none']
                    }
                  >
                    <PeriodCircle bg={color}></PeriodCircle>
                    {range}
                  </KeyText>
                  <KeyText
                    borderBottom={index === tableInfo.length - 1 && 'none'}
                    borderRight={'none'}
                  >
                    {key}
                  </KeyText>
                </AgeColumnItem>
              );
            }
            return null;
          })}
        </AgeColumnList>
      </Box>
    </Box>
  );
};

export default AnnualPeriodTable;
