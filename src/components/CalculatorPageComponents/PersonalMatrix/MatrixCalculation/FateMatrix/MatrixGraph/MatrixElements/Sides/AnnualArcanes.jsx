import React from 'react';
import MatrixElementsItem from '../MatrixElementsItem';

const AnnualArcanes = ({ yearArcanes }) => {
  const [arc1, arc2, arc3, arc4, arc5, arc6, arc7, arc8] = yearArcanes;
  return (
    <>
      <MatrixElementsItem
        element={arc1}
        fontSize={['11px', '20px']}
        top={['33%', '34%']}
        left={['13%', '14%']}
      />
      <MatrixElementsItem
        element={arc2}
        fontSize={['11px', '20px']}
        top={['13%', '14%']}
        left={['33%', '34%']}
      />
      <MatrixElementsItem
        element={arc3}
        fontSize={['11px', '20px']}
        top={['13%', '14%']}
        left={['62%', '63%']}
      />
      <MatrixElementsItem
        element={arc4}
        fontSize={['11px', '20px']}
        top={['33%', '34%']}
        left={['82%', '83.5%']}
      />
      <MatrixElementsItem
        element={arc5}
        fontSize={['11px', '20px']}
        top={['61%', '62%']}
        left={['82%', '83.5%']}
      />
      <MatrixElementsItem
        element={arc6}
        fontSize={['11px', '20px']}
        top={['82%', '83%']}
        left={['62%', '63%']}
      />
      <MatrixElementsItem
        element={arc7}
        fontSize={['11px', '20px']}
        top={['82%', '83%']}
        left={['33%', '34%']}
      />
      <MatrixElementsItem
        element={arc8}
        fontSize={['11px', '20px']}
        top={['61%', '62%']}
        left={['13%', '14%']}
      />
    </>
  );
};

export default AnnualArcanes;
