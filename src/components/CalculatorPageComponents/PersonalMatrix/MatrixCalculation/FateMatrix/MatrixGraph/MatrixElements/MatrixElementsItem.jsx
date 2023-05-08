import { MatrixKey } from './MatrixElementItem.styled';

const MatrixElementsItem = ({ element, ...props }) => {
  if (isNaN(element)) {
    return null;
  }
  return <MatrixKey {...props}>{element}</MatrixKey>;
};

export default MatrixElementsItem;
