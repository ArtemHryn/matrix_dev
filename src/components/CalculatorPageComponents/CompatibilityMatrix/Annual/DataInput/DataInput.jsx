import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import { useMatrix } from 'pages/Calculator';
import {
  BoxTitle,
  SubmitBtn,
} from 'components/CalculatorPageComponents/PersonalMatrix/DataInput/DataInput.styled';
import { Input } from '../../Team/DataInput/InputLine/InputLine.styled';
import { Error } from 'components/CalculatorPageComponents/PersonalMatrix/DataInput/DataByDate/DataByDate.styled';
import { format } from 'date-fns';

const gradient =
  'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(249, 237, 255, 0.3) 100%)';

const DataInput = () => {
  const { t } = useTranslation('calc');
  const { setPartnersDate, setShowMatrix } = useMatrix();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { year: format(new Date(), 'yyyy') } });
  const onChange = e => {
    let inputDate = e.target.value.replace(/\D/g, '');
    if (inputDate.length > 8) {
      inputDate = inputDate.substr(0, 8);
    }
    if (inputDate.length > 4) {
      inputDate = inputDate.substr(0, 4) + '.' + inputDate.substr(4);
    }
    if (inputDate.length > 2) {
      inputDate = inputDate.substr(0, 2) + '.' + inputDate.substr(2);
    }
    setValue('date', inputDate);
  };

  const onSubmitForm = data => {
    const [day, month, year] = data.date.split('.');
    setPartnersDate([
      { day, month, year, name: data.name },
      { day: 1, month: 1, year: data.year, name: t('annualMatrix') },
    ]);
    setShowMatrix(true);
    document.activeElement.blur();
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmitForm)} mb={['40px', '60px']}>
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
        <Box display="flex" flexWrap="wrap" gridGap={['6px']}>
          <Input
            type="text"
            width={['calc((100% - 12px) / 2)', null, 'calc((100% - 12px) / 2)']}
            placeholder={t('personalMatrixNamePlaceholder')}
            mb={['5px']}
            {...register('name')}
          />
          <Input
            type="number"
            width={['calc((100% - 12px) / 2)', null, 'calc((100% - 12px) / 2)']}
            placeholder={t('year')}
            mb={['5px']}
            onInput={event => {
              event.target.value = event.target.value.slice(0, 4);
            }}
            {...register('year', {
              required: { value: true, message: t('yearEnterError') },
              pattern: {
                value: /^[2][0][0-9]{2}$/,
                message: t('yearPatternError'),
              },
            })}
          />
          <Input
            width={['100%', null, '100%']}
            type="text"
            placeholder={t('personalMatrixDatePlaceholder')}
            {...register('date', {
              onChange: onChange,
              required: {
                value: true,
                message: t('personalMatrixDateRequired'),
              },
              pattern: {
                value: /^\d{2}\.\d{2}\.\d{4}$/,
                message: t('personalMatrixDatePattern'),
              },
            })}
          />
        </Box>
        {errors.date && <Error>{errors.date.message}</Error>}
        {errors.year && <Error>{errors.year.message}</Error>}
      </Box>
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

export default DataInput;
