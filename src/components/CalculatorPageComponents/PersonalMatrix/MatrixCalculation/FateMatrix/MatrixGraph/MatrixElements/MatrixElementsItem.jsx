import React from 'react';
import { MatrixKey } from './MatrixElementItem.styled';

const MatrixElementsItem = ({ element, ...props }) => {
  return <MatrixKey {...props}>{element}</MatrixKey>;
};

export default MatrixElementsItem;
