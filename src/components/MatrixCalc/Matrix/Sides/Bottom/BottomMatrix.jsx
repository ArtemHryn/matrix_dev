import { MatrixKey } from "../../Matrix.styled";

export const BottomMatrix = ({ data }) => {
  const {bottom1, bottom2, bottom3} = data
    return (
      <>
        <MatrixKey x="47.6%" y="92.6%">
          {bottom1}
        </MatrixKey>
        <MatrixKey x="47.7%" y="86.2%">
          {bottom2}
        </MatrixKey>
        <MatrixKey x="47.7%" y="79.6%">
          {bottom3}
        </MatrixKey>
      </>
    );
}