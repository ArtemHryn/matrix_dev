import { MatrixKey } from '../../Matrix.styled';

export const LeftMatrix = ({ data }) => {
  const { day, left2, left3 } = data;
  return (
    <>
      <MatrixKey x="2.5%" y="47.5%">
        {day}
      </MatrixKey>
      <MatrixKey x="9%" y="47.5%">
        {left2}
      </MatrixKey>
      <MatrixKey x="15.5%" y="47.5%">
        {left3}
      </MatrixKey>
    </>
  );
};
