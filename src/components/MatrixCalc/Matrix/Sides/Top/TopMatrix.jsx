import { TopElement, TopLayout } from "./TopMatrix.styled";

export const TopMatrix = ({data}) => {
    return (
      <TopLayout>
        <TopElement>{data.month}</TopElement>
        <TopElement>{data.top2}</TopElement>
        <TopElement>{data.top3}</TopElement>
      </TopLayout>
    );
}