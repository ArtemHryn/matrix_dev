import { MatrixKey } from '../../Matrix.styled';

export const TopMatrix = ({ data }) => {
  const { month, top2, top3 } = data;
  return (
    <>
      <MatrixKey x="47.7%" y="2.2%">
        {month}
      </MatrixKey>
      <MatrixKey x="47.7%" y="8.7%">
        {top2}
      </MatrixKey>
      <MatrixKey x="47.7%" y="15.3%">
        {top3}
      </MatrixKey>
    </>
  );
};
