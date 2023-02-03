import { Box } from "components/Box"
import { TransformationList, TransformationText, TransformationTitle } from "./TransformationWay.styled";
import littleStar from 'images/WaysToTransformation/littleStar.png'

export const TransformationWay = () => {
    return (
      <Box width={[null, null, '478px']}>
        <Box
          mb={['8px', '8px', '12px']}
          width={['300px', '300px', '385px']}
          height={['57px', '57px', '65px']}
          display="flex"
          backgroundColor="#f5f1ff"
          borderRadius="88px"
          alignItems="center"
          justifyContent="space-between"
          pl={['26px', '26px', '57px']}
          pr="10px"
        >
          <TransformationTitle>На Трансформации</TransformationTitle>
          <Box
            width="43px"
            height="43px"
            backgroundColor="white"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src={littleStar} alt="star" />
          </Box>
        </Box>

        <TransformationList>
          <li>
            <TransformationText>
              Энергетическую и информационную поддержку.{' '}
            </TransformationText>
          </li>
          <li>
            <TransformationText>
              Предоставление комплекса рекомендаций и материалов - кармический
              рецепт
            </TransformationText>
          </li>
          <li>
            <TransformationText>
              Разноплановые методики и практики для проработки
            </TransformationText>
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