import { useEffect, useState } from 'react';
import { Box } from 'components/Box';
import {
  AgeColumnName,
  AgeColumnNameText,
  Arrow,
  ChangePageBtn,
  TableHeader,
} from '../PeriodMatrix.styled';
import { useMatrix } from 'pages/Calculator';
import TableTemplate from './TableTemplate/TableTemplate';

const PeriodTable = () => {
  const { ageList, age } = useMatrix();
  const [firstPart, setFirstPart] = useState([]);
  const [secondPart, setSecondPart] = useState([]);
  const [isFirstPage, setIsFirstPage] = useState(true);

  useEffect(() => {
    if (!ageList) {
      return;
    }

    setFirstPart(ageList.filter(({ age }) => age < 40));
    setSecondPart(ageList.filter(({ age }) => age >= 40));
  }, [ageList]);

  if (firstPart.length === 0 || secondPart.length === 0) {
    return null;
  }
  
  return (
    <Box maxWidth="900px" margin="0 auto">
      <Box
        display="flex"
        backgroundImage="linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(249, 237, 255, 0.7) 100%);"
        border={['0.6px solid #72499B']}
        height={['49px', '58px']}
        borderRadius={['8px']}
        alignItems="center"
        justifyContent="space-between"
        px={['23px']}
        mb={['4px']}
      >
        <ChangePageBtn onClick={() => setIsFirstPage(prev => !prev)}>
          <Arrow />
        </ChangePageBtn>
        <TableHeader>Энергии покровители по годам</TableHeader>
        <ChangePageBtn onClick={() => setIsFirstPage(prev => !prev)}>
          <Arrow rotate={'180deg'} />
        </ChangePageBtn>
      </Box>

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
        <AgeColumnName>
          <AgeColumnNameText>Возраст</AgeColumnNameText>
        </AgeColumnName>
        <AgeColumnName flex="3">
          <AgeColumnNameText>Ключ</AgeColumnNameText>
        </AgeColumnName>
        <AgeColumnName>
          <AgeColumnNameText>Возраст</AgeColumnNameText>
        </AgeColumnName>
        <AgeColumnName flex="3" border={['none', 'none', 'none']}>
          <AgeColumnNameText>Ключ</AgeColumnNameText>
        </AgeColumnName>
      </Box>
      <Box
        bg="rgba(255, 255, 255, 0.5)"
        borderRadius={['13px']}
        border={['0.6px solid #72499B']}
        overflow="hidden"
      >
        {isFirstPage ? (
          <TableTemplate main={firstPart} additional={secondPart} age={age} />
        ) : (
          <TableTemplate main={secondPart} additional={firstPart} age={age} />
        )}
      </Box>
    </Box>
  );
};

export default PeriodTable;
