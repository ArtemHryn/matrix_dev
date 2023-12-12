import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useMatrix } from 'pages/Calculator';

import { Box } from 'components/Box';
import DataInputContainer from 'components/Common/DataInputContainer/DataInputContainer';
import { Input } from '../../Team/DataInput/InputLine/InputLine.styled';
import { Error } from 'components/CalculatorPageComponents/PersonalMatrix/DataInput/DataByDate/DataByDate.styled';

import './input.css';
import { DropDownLib } from './DataInputDemon.styled';

const DataInputDemon = ({ setIsFullOverlap }) => {
  const { t } = useTranslation('calc');
  const { setPartnersDate, setShowMatrix } = useMatrix();

  const matrixes = [
    { name: '12 код', code: '12' },
    { name: '13 код', code: '13' },
    { name: '14 код', code: '14' },
    { name: '15 код', code: '15' },
    { name: '4 $', code: 'm' },
    { name: '3 $', code: 'w' },
  ];
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

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
    setPartnersDate([{ day, month, year, name: data.name }, { demonMatrix: data.demonMatrix }]);
    setShowMatrix(true);
    setIsFullOverlap(data.isFullOverlap);
    document.activeElement.blur();
  };

  return (
    <DataInputContainer handleSubmit={handleSubmit(onSubmitForm)} register={register}>
      <Box display="flex" flexWrap="wrap" gridGap={['6px']}>
        <Input
          type="text"
          width={['calc((100% - 12px) / 2)', null, 'calc((100% - 12px) / 2)']}
          placeholder={t('personalMatrixNamePlaceholder')}
          mb={['5px']}
          {...register('name')}
        />
        <Controller
          name="demonMatrix"
          control={control}
          defaultValue={'12'}
          render={({ field, fieldState }) => (
            <DropDownLib
              id={field.name}
              value={field.value}
              optionValue="code"
              optionLabel="name"
              placeholder="Select a City"
              options={matrixes}
              onChange={e => field.onChange(e.value)}
            />
          )}
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
    </DataInputContainer>
  );
};

export default DataInputDemon;
