import { BottomElement, BottomLayout } from "./BottomMatrix.styled";

export const BottomMatrix = ({ data }) => {
    return (
      <BottomLayout>
        <BottomElement>{data.bottom1}</BottomElement>
        <BottomElement>{data.bottom2}</BottomElement>
        <BottomElement>{data.bottom3}</BottomElement>
      </BottomLayout>
    );
}