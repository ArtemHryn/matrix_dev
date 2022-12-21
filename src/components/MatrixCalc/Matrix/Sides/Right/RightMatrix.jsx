import { MatrixKey } from '../../Matrix.styled';

export const RightMatrix = ({ data }) => {
  return (
    <>
      <MatrixKey x="93.1%" y="47.6%">
        {data.year}
      </MatrixKey>
      <MatrixKey x="86.6%" y="47.6%">
        {data.right2}
      </MatrixKey>
      <MatrixKey x="80.1%" y="47.6%">
        {data.right3}
      </MatrixKey>
    </>
  );
};
