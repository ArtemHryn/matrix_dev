import { MatrixKey } from '../../Matrix.styled';

export const GenericSquare = ({ data }) => {
  const {
    topLeft1,
    topLeft2,
    topLeft3,
    topRight1,
    topRight2,
    topRight3,
    bottomLeft1,
    bottomLeft2,
    bottomLeft3,
    bottomRight1,
    bottomRight2,
    bottomRight3,
  } = data;
  return (
    <>
      <MatrixKey x="15.9%" y="16.1%">
        {topLeft1}
      </MatrixKey>
      <MatrixKey x="20.7%" y="20.7%">
        {topLeft2}
      </MatrixKey>
      <MatrixKey x="25.2%" y="25.2%">
        {topLeft3}
      </MatrixKey>

      <MatrixKey x="79.3%" y="15.8%">
        {topRight1}
      </MatrixKey>
      <MatrixKey x="74.8%" y="20.7%">
        {topRight2}
      </MatrixKey>
      <MatrixKey x="70%" y="25.3%">
        {topRight3}
      </MatrixKey>

      <MatrixKey x="16.4%" y="80%">
        {bottomLeft1}
      </MatrixKey>
      <MatrixKey x="20.9%" y="74.8%">
        {bottomLeft2}
      </MatrixKey>
      <MatrixKey x="25.3%" y="69.9%">
        {bottomLeft3}
      </MatrixKey>
      <MatrixKey x="79.4%" y="79.7%">
        {bottomRight1}
      </MatrixKey>
      <MatrixKey x="74.9%" y="74.9%">
        {bottomRight2}
      </MatrixKey>
      <MatrixKey x="70.3%" y="70.2%">
        {bottomRight3}
      </MatrixKey>
    </>
  );
};
