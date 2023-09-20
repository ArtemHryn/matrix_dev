import {
  BtnItem,
  BtnList,
} from 'components/CalculatorPageComponents/PersonalMatrix/MatrixBtn/MatrixBtn.styled';
import { Link } from './MatrixNavBtn.styled';

const MatrixNavBtn = ({ list }) => {
  return (
    <BtnList>
      {list.map(btn => (
        <BtnItem key={btn.to}>
          <Link to={btn.to}>{btn.name}</Link>
        </BtnItem>
      ))}
    </BtnList>
  );
};

export default MatrixNavBtn;
