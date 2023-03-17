import { motion } from 'framer-motion';
import { Box } from 'components/Box';
import {
  AnimatedPuzzle,
  MatrixImg,
  Puzzle,
  PuzzleText,
} from './MatrixMinus.styled';
import puzzlesText from './puzzlesText';
import matrixMinus from 'images/matrixPlusAndMinus/pazzles.png';
import matrixMinusTab from 'images/matrixPlusAndMinus/pazzlesTab.png';
import matrixPuzzle from 'images/matrixPlusAndMinus/animatedPuzzle.png';
import matrixPuzzleTab from 'images/matrixPlusAndMinus/animatedPuzzleTab.png';

export const MatrixMinus = () => {
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
        transition: { duration: 0.7, ease: 'easeInOut', delayChildren: 0.5 },
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
          <source srcSet={matrixMinusTab} media="(min-width: 768px)" />
          <MatrixImg src={matrixMinus} alt="matrixMinus" />
        </picture>
        <AnimatedPuzzle className="animate__hinge">
          <picture>
            <source srcSet={matrixPuzzleTab} media="(min-width: 768px)" />

            <Puzzle src={matrixPuzzle} alt="puzzle" loading="lazy" />
          </picture>
          <PuzzleText
            top={['55px', '85px', '65px']}
            left={['20px', '75px', '45px']}
            maxWidth="109px"
            rotate="-9deg"
            display="block"
          >
            испытываешь финансовые трудности
          </PuzzleText>
        </AnimatedPuzzle>

        {puzzlesText.map(
          ({
            text,
            xm,
            ym,
            xt,
            yt,
            xd,
            yd,
            r,
            rt,
            maxWidth,
            maxWidthTab,
            maxWidthDesc,
          }) => (
            <PuzzleText
              top={[ym, yt, yd]}
              left={[xm, xt, xd]}
              key={text}
              rotate={r}
              rt={rt}
              maxWidth={[maxWidth, maxWidthTab, maxWidthDesc]}
            >
              {text}
            </PuzzleText>
          )
        )}
      </Box>
    </motion.div>
  );
};
