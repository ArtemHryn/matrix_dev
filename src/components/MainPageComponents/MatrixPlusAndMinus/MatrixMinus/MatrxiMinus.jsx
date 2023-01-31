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
        x: 300,
        opacity: 0.3,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.9, type: 'linear', delayChildren: 0.5 },
      }}
      exit={{
        x: 300,
        opacity: 0.3,
        transition: { duration: 0.9, type: 'linear', delayChildren: 0.5 },
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

            <Puzzle src={matrixPuzzle} alt="puzzle" />
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
