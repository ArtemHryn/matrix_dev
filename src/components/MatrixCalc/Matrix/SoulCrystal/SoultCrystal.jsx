import { MatrixKey } from "../Matrix.styled";


export const SoulCrystal = ({ data }) => {
  const {
    innerTop1,
    innerTop2,
    innerTop3,
    innerLeft1,
    innerLeft2,
    innerLeft3,
    innerRight1,
    innerRight2,
    innerRight3,
    innerBottom1,
    innerBottom2,
    innerBottom3,
    innerTopLeft,
    innerTopRight,
    innerBottomLeft,
    innerBottomRight,
  } = data;
  return (
    <>
      <MatrixKey x="38%" y="24.9%" fontSize="20px">
        {innerTop1}
      </MatrixKey>
      <MatrixKey x="47.7%" y="24.3%">
        {innerTop2}
      </MatrixKey>
      <MatrixKey x="57.7%" y="24.9%" fontSize="20px">
        {innerTop3}
      </MatrixKey>
      <MatrixKey x="24.9%" y="38.5%" fontSize="20px">
        {innerLeft1}
      </MatrixKey>
      <MatrixKey x="24.5%" y="47.8%">
        {innerLeft2}
      </MatrixKey>
      <MatrixKey x="24.8%" y="57%" fontSize="20px">
        {innerLeft3}
      </MatrixKey>
      <MatrixKey x="70.4%" y="38.5%" fontSize="20px">
        {innerRight1}
      </MatrixKey>
      <MatrixKey x="70.7%" y="47.6%">
        {innerRight2}
      </MatrixKey>
      <MatrixKey x="70.5%" y="57.2%" fontSize="20px">
        {innerRight3}
      </MatrixKey>
      <MatrixKey x="37.8%" y="70.5%" fontSize="20px">
        {innerBottom1}
      </MatrixKey>
      <MatrixKey x="47.8%" y="70.9%">
        {innerBottom2}
      </MatrixKey>
      <MatrixKey x="57.6%" y="70.6%" fontSize="20px">
        {innerBottom3}
      </MatrixKey>

      <MatrixKey x="31.3%" y="31.2%">
        {innerTopLeft}
      </MatrixKey>
      <MatrixKey x="63.9%" y="31%">
        {innerTopRight}
      </MatrixKey>
      <MatrixKey x="31.1%" y="64.1%">
        {innerBottomLeft}
      </MatrixKey>
      <MatrixKey x="64.1%" y="63.9%">
        {innerBottomRight}
      </MatrixKey>
    </>
  );
};
