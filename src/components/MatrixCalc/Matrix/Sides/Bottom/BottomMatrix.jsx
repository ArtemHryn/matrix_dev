import { BottomElement, BottomLayout } from "./BottomMatrix.styled";

export const BottomMatrix = ({ data }) => {
  const {bottom1, bottom2, bottom3} = data
    return (
      <BottomLayout>
        <BottomElement>{bottom1}</BottomElement>
        <BottomElement>{bottom2}</BottomElement>
        <BottomElement>{bottom3}</BottomElement>
      </BottomLayout>
    );
}