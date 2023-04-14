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
    <Box as="section" py={['40px', '40px', '90px']}>
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
        display={[null, null, 'flex']}
        justifyContent="space-between"
        height={[null, null, '700px']}
      >
        <Box
          display={[null, 'flex']}
          justifyContent="space-between"
          alignItems={[null, 'flex-end', 'flex-start']}
          mb="25px"
          order={[null, null, 2]}
          pt={[null, null, '30px']}
          flexDirection={[null, null, 'column']}
        >
          <Title>{isChecked ? 'Матрица в плюсе' : 'Матрица в минусе'}</Title>
          <Box
            display={['none', 'flex']}
            alignItems={[null, 'center', 'flex-start']}
            flexDirection={[null, null, 'column']}
          >
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
