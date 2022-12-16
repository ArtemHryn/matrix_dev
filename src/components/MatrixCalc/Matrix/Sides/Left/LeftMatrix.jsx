import { LeftElement, LeftLayout } from "./LeftMatrix.styled";

export const LeftMatrix = ({data}) => {
    return (
      <LeftLayout>
        <LeftElement>{data.day}</LeftElement>
        <LeftElement>{data.left2}</LeftElement>
        <LeftElement>{data.left3}</LeftElement>
      </LeftLayout>
    );
}