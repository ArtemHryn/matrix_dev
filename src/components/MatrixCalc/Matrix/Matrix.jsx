import { useState, useEffect } from 'react';
import { Box } from 'components/Box';
import {Img, MatrixKey } from './Matrix.styled';
import MainMatrix from '../../../images/MatrixMain.svg';
import contractMatrix from '../../../images/contractMatrix.svg'
import { allData } from 'helper/calculateMatrix';
import { TopMatrix } from './Sides/Top/TopMatrix';
import { LeftMatrix } from './Sides/Left/LeftMatrix';
import { BottomMatrix } from './Sides/Bottom/BottomMatrix';
import { RightMatrix } from './Sides/Right/RightMatrix';
import { GenericSquare } from './Sides/GenericSquare/GenericSquare';
import { SoulCrystal } from './SoulCrystal/SoultCrystal';
import testImg from '../../../images/test.svg'

export const Matrix = ({ date, isGenerated, setData, matrixType }) => {
  const [dataM, setDataM] = useState({});

  const typeOfMatrix = () => {
    switch (matrixType) {
      case 'perconal':
        return MainMatrix;
      case 'contract':
        return contractMatrix;
      case 'health':
        return testImg;

      default:
        return MainMatrix;
    }
  };

  useEffect(() => {
    const result = allData(date, isGenerated);
    setDataM(result);
    setData(result);
  }, [date, isGenerated, setData]);

  const {center, center2} = dataM
  return (
    <Box position="relative">
      <Img src={typeOfMatrix()} alt="Matrix" />
      <TopMatrix data={dataM} />
      <LeftMatrix data={dataM} />
      <BottomMatrix data={dataM} />
      <RightMatrix data={dataM} />
      <MatrixKey x="47.6%" y="47.8%" fontSize="26px">
        {center}
      </MatrixKey>
      <MatrixKey x="51%" y="51.2%" fontSize="19px">
        {center2}
      </MatrixKey>
      <GenericSquare data={dataM} />
      <SoulCrystal data={dataM} matrixType={matrixType} />
    </Box>
  );
};
