import React from 'react';
import { useMatrix } from 'pages/Calculator';
import MatrixElementsItem from '../MatrixElementsItem';

const Bottom = () => {
  const { matrixData } = useMatrix();
  const {
    bottomLeft1,
    bottomLeft2,
    bottomLeft3,
    bottom1,
    bottom2,
    bottom3,
    bottomRight1,
    bottomRight2,
    bottomRight3,
  } = matrixData;
  return (
    <>
      <MatrixElementsItem
        element={bottomLeft1}
        bottom={['16.5%', '17.5%']}
        left={['16.5%', '17.5%']}
      />
      <MatrixElementsItem
        element={bottomLeft2}
        bottom={['22%', '22.5%']}
        left={['21.1%', '22%']}
      />
      <MatrixElementsItem
        element={bottomLeft3}
        bottom={['26.5%', '27.3%']}
        left={['25.6%', '26.5%']}
      />
      <MatrixElementsItem
        element={bottom1}
        bottom={['4%', '4.5%']}
        left={['47.8%', '48.7%']}
      />
      <MatrixElementsItem
        element={bottom2}
        bottom={['10.5%', '11.1%']}
        left={['47.8%', '48.7%']}
      />
      <MatrixElementsItem
        element={bottom3}
        bottom={['16.7%', '17.6%']}
        left={['47.8%', '48.7%']}
      />
      <MatrixElementsItem
        element={bottomRight1}
        bottom={['16.8%', '17.6%']}
        right={['16.5%', '17.3%']}
      />
      <MatrixElementsItem
        element={bottomRight2}
        bottom={['21.7%', '22.3%']}
        right={['20.8%', '21.7%']}
      />
      <MatrixElementsItem
        element={bottomRight3}
        bottom={['26.3%', '26.9%']}
        right={['25.4%', '26.4%']}
      />
    </>
  );
};

export default Bottom;
