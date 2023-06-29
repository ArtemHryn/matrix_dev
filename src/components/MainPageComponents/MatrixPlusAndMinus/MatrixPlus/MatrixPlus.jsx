import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import compltedMatrix from 'images/matrixPlusAndMinus/pazzlesInPlus.webp';
import compltedMatrixTab from 'images/matrixPlusAndMinus/matrixInPlusTab.webp';
import {
  MatrixContainer,
  MatrixImg,
  PuzzleTextPlus,
} from './MatrixPlus.styled';
import puzzlesTextPlus from './puzzleTextPlus';

export const MatrixPlus = () => {
  const { i18n } = useTranslation();

  const getMatrixPlusList = () => {
    const lng = i18n.language;
    return puzzlesTextPlus(lng);
  };
  return (
    <MatrixContainer
      initial={{
        scale: 0,
        opacity: 0.3,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.7,
          type: 'linear',
          delayChildren: 0.5,
          delay: 0.2,
        },
      }}
      exit={{
        scale: [1, 0.8, 0.8, 1, 0],
        rotate: [0, 0, 90, 90, 0],
        borderRadius: ['0%', '0%', '50%', '50%', '0%'],
        transition: {
          duration: 1.7,
          ease: 'easeInOut',
          delay: 0.2,
          times: [0, 0.2, 0.5, 0.8, 1],
        },
      }}
    >
      <Box
        position="relative"
        width={['307px', '100%']}
        height={['612px', '100%']}
      >
        <picture>
          <source srcSet={compltedMatrixTab} media="(min-width: 768px)" />
          <MatrixImg
            srcSet={compltedMatrix}
            alt="completedMatrix"
            loading="lazy"
          />
        </picture>
        {getMatrixPlusList().map(
          ({
            text,
            xm,
            ym,
            xt,
            yt,
            xd,
            yd,
            maxWidth,
            maxWidthTab,
            maxWidthDesc,
          }) => (
            <PuzzleTextPlus
              key={text}
              left={[xm, xt, xd]}
              top={[ym, yt, yd]}
              maxWidth={[maxWidth, maxWidthTab, maxWidthDesc]}
            >
              {text}
            </PuzzleTextPlus>
          )
        )}
      </Box>
    </MatrixContainer>
  );
};
