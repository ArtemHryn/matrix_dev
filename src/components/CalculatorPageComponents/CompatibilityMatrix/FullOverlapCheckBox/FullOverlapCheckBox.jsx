import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import React from 'react';
import { CheckLabel, CheckMark, LabelText } from './FullOverlapCheckBox.styled';

const FullOverlapCheckBox = ({ register }) => {
  const { t } = useTranslation('calc');
  return (
    <Box
      display="flex"
      gridGap={['10px', '12px']}
      mb={['25px', '38px']}
      justifyContent="center"
    >
      <CheckLabel>
        <input type="checkbox" {...register('isFullOverlap')} />
        <CheckMark className="checkmark"></CheckMark>
      </CheckLabel>
      <LabelText>{t('fullOverlapCheckbox')}</LabelText>
    </Box>
  );
};

export default FullOverlapCheckBox;
