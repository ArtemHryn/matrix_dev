import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import { CheckLabel, CheckMark, LabelText } from './FullOverlapCheckBox.styled';
import { useEffect } from 'react';
import { useWatch } from 'react-hook-form';

const FullOverlapCheckBox = ({ register, setValue, control }) => {
  const { t } = useTranslation('calc');
  const isFullOverlap = useWatch({ name: 'isFullOverlap', control });
  const method2023 = useWatch({ name: 'method2023', control });
  useEffect(() => {
    if (isFullOverlap) {
      setValue('method2023', false);
      setValue('isFullOverlap', true);
    }
  }, [isFullOverlap, setValue]);

  useEffect(() => {
    if (method2023) {
      setValue('isFullOverlap', false);
      setValue('method2023', true);
    }
  }, [method2023, setValue]);

  return (
    <Box display="flex" justifyContent="center" mb={['25px', '38px']}>
      <Box display="flex" flexDirection="column" gridGap={['10px', '12px']}>
        <Box display="flex" gridGap={['10px', '12px']}>
          <CheckLabel>
            <input type="checkbox" {...register('isFullOverlap')} />
            <CheckMark className="checkmark"></CheckMark>
          </CheckLabel>
          <LabelText>{t('fullOverlapCheckbox')}</LabelText>
        </Box>

        <Box display="flex" gridGap={['10px', '12px']} mb={['25px', '38px']}>
          <CheckLabel>
            <input type="checkbox" {...register('method2023')} />
            <CheckMark className="checkmark"></CheckMark>
          </CheckLabel>
          <LabelText>{t('method2023')}</LabelText>
        </Box>
      </Box>
    </Box>
  );
};

export default FullOverlapCheckBox;
