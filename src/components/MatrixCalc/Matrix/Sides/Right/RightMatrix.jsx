import { RightElement, RightLayout } from "./RightMatrix.styled";

export const RightMatrix = ({ data }) => {
    return (
      <RightLayout>
        <RightElement>{data.year}</RightElement>
        <RightElement>{data.right2}</RightElement>
        <RightElement>{data.right3}</RightElement>
      </RightLayout>
    );
}