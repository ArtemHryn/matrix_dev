import { Box } from "components/Box"
import { TransformationList, TransformationText, TransformationTitle } from "./TransformationWay.styled";

export const TransformationWay = () => {
    return (
      <Box>
        <TransformationTitle>На Трансформации</TransformationTitle>
        <TransformationList>
          <li>
            <TransformationText>Энергетическую и информационную поддержку. </TransformationText>
          </li>
          <li>
            <TransformationText>
              Предоставление комплекса рекомендаций и материалов - кармический
              рецепт
            </TransformationText>
          </li>
          <li>
            <TransformationText>Разноплановые методики и практики для проработки</TransformationText>
          </li>
          <li>
            <TransformationText>
              Отслеживание процесса трансформации с помощью точек контроля между
              этапами в формате созвонов.{' '}
            </TransformationText>
          </li>
        </TransformationList>
      </Box>
    );
}