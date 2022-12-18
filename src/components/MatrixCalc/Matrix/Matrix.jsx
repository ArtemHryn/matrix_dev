import { Box } from 'components/Box';
import { CenterSpan, CenterSpan2, Img } from './Matrix.styled';
import commonMatrix from '../../../images/commonMatrix2.svg';
import contractMatrix from '../../../images/contractMatrix.svg'
import { allData } from 'helper/calculateMatrix';
import { TopMatrix } from './Sides/Top/TopMatrix';
import { LeftMatrix } from './Sides/Left/LeftMatrix';
import { BottomMatrix } from './Sides/Bottom/BottomMatrix';
import { RightMatrix } from './Sides/Right/RightMatrix';
import { GenericSquare } from './Sides/GenericSquare/GenericSquare';
import { SoulCrystal } from './SoulCrystal/SoultCrystal';
import { useEffect } from 'react';
import { useState } from 'react';

export const Matrix = ({ date, isGenerated, setData, matrixType }) => {
  const [dataM, setDataM] = useState({});

  const typeOfMatrix = () => {
    switch (matrixType) {
      case 'perconal':
        return commonMatrix;
      case 'contract':
        return contractMatrix;

      default:
        return commonMatrix;;
    }
  };

  useEffect(() => {
    const result = allData(date, isGenerated);
    setDataM(result);
    setData(result);
  }, [date, isGenerated, setData]);

  return (
    <Box position="relative">
      <Img src={typeOfMatrix()} alt="Matrix" />
      <TopMatrix data={dataM} />
      <LeftMatrix data={dataM} />
      <BottomMatrix data={dataM} />
      <RightMatrix data={dataM} />
      <CenterSpan>{dataM.center}</CenterSpan>
      <CenterSpan2>{dataM.center2}</CenterSpan2>
      <GenericSquare data={dataM} />
      <SoulCrystal data={dataM} matrixType={matrixType} />
    </Box>
  );
};
