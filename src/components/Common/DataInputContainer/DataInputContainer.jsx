import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import {
  BoxTitle,
  SubmitBtn,
} from 'components/CalculatorPageComponents/PersonalMatrix/DataInput/DataInput.styled';
import FullOverlapCheckBox from 'components/CalculatorPageComponents/CompatibilityMatrix/FullOverlapCheckBox/FullOverlapCheckBox';

const gradient =
  'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(249, 237, 255, 0.3) 100%)';

const DataInputContainer = ({ handleSubmit, children, register, control, setValue }) => {
  const { t } = useTranslation('calc');

  return (
    <Box as="form" onSubmit={handleSubmit} mb={['40px', '60px']}>
      <Box
        backgroundImage={gradient}
        border="1px solid #72499B"
        borderRadius="14px"
        maxWidth={['370px', null, '500px']}
        px="40px"
        py="36px"
        m={['0 auto 40px', '0 auto 60px']}
      >
        <BoxTitle width="100%">{t('personalMatrixBoxTitle')}</BoxTitle>
        {children}
      </Box>
      <FullOverlapCheckBox register={register} setValue={setValue} control={control} />

      <SubmitBtn
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileFocus={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {t('personalMatrixCalc')}
      </SubmitBtn>
    </Box>
  );
};

export default DataInputContainer;
