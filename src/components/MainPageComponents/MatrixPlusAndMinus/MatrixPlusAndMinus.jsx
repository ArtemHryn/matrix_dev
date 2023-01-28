import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Box } from 'components/Box';
import {
  Label,
  Input,
  Slider,
  Title,
  CheckBoxText,
} from './MatrixPlusAndMinus.styled';

import { MatrixMinus } from './MatrixMinus/MatrxiMinus';
import { MatrixPlus } from './MatrixPlus/MatrixPlus';

export const MatrixPlusAndMinus = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onChangeStatus = e => {
    setIsChecked(e.target.checked);
  };
  return (
    <Box as="section" pt="40px" pb="40px">
      <Box
        maxWidth={['430px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
      >
        <Box
          display={[null, 'flex']}
          justifyContent="space-between"
          alignItems="flex-end"
          mb="25px"
        >
          <Title>Матрица в минусе</Title>
          <Box display={['none', 'flex']} alignItems="center">
            <CheckBoxText op={isChecked}>Проработать матрицу</CheckBoxText>
            <Label>
              <Input
                type="checkbox"
                checked={isChecked}
                onChange={onChangeStatus}
              />
              <Slider></Slider>
            </Label>
          </Box>
        </Box>
        <AnimatePresence mode="wait" onExitComplete={() => null}>
          {isChecked ? <MatrixPlus key="1" /> : <MatrixMinus key="2" />}
        </AnimatePresence>

        <Box
          mt="70px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display={['flex', 'none']} justifyContent="space-between">
            <CheckBoxText op={isChecked}>Проработать матрицу</CheckBoxText>
            <Label>
              <Input
                type="checkbox"
                checked={isChecked}
                onChange={onChangeStatus}
              />
              <Slider></Slider>
            </Label>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
