import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import { useMatrix } from 'pages/Calculator';
import { Input } from '../../Team/DataInput/InputLine/InputLine.styled';
import { Error } from 'components/CalculatorPageComponents/PersonalMatrix/DataInput/DataByDate/DataByDate.styled';
import { format } from 'date-fns';
import DataInputContainer from 'components/Common/DataInputContainer/DataInputContainer';

const DataInput = ({ setIsFullOverlap, setIsMethod2023 }) => {
  const { t } = useTranslation('calc');
  const { setPartnersDate, setShowMatrix } = useMatrix();
  const {
    register,
    setValue,
    handleSubmit,
    control,
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
    setIsFullOverlap(data.isFullOverlap);
    setIsMethod2023(data.method2023);
    document.activeElement.blur();
  };

  return (
    <DataInputContainer
      handleSubmit={handleSubmit(onSubmitForm)}
      register={register}
      setValue={setValue}
      control={control}
    >
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
    </DataInputContainer>
  );
};

export default DataInput;
