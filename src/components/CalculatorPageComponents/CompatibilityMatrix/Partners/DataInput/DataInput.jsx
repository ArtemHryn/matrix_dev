import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import { useFieldArray, useForm } from 'react-hook-form';
import PartnerData from './PartnerData';
import { SubmitBtn } from 'components/CalculatorPageComponents/PersonalMatrix/DataInput/DataInput.styled';
import { useMatrix } from 'pages/Calculator';
import { MatrixNumber } from '../Partners.styled';
import FullOverlapCheckBox from '../../FullOverlapCheckBox/FullOverlapCheckBox';

const DataInput = ({ setIsFullOverlap, setIsMethod2023 }) => {
  const { setPartnersDate, setShowMatrix } = useMatrix();
  const { t } = useTranslation('calc');
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      info: [
        { date: '', name: '' },
        { date: '', name: '' },
      ],
    },
  });
  const { fields } = useFieldArray({
    name: 'info',
    control,
  });
  const onSubmit = data => {
    const partnersInfo = [];
    data.info.forEach(element => {
      if (element.isGenerated) {
        delete element.date;
        delete element.name;
        partnersInfo.push(element);
        return;
      }
      const [day, month, year] = element.date.split('.');
      partnersInfo.push({
        day,
        month,
        year,
        isGenerated: element.isGenerated,
        name: element.name,
      });
    });
    setPartnersDate(partnersInfo);
    setShowMatrix(true);
    setIsMethod2023(data.method2023);
    setIsFullOverlap(data.isFullOverlap);
    document.activeElement.blur();
  };

  return (
    <Box as="form" mb={['87px']} onSubmit={handleSubmit(onSubmit)}>
      <Box display={[null, null, 'flex']} justifyContent="space-evenly">
        {fields.map((field, index) => (
          <Box key={field.id}>
            <MatrixNumber>
              {t('tableMatrix')} {index + 1}
            </MatrixNumber>
            <PartnerData
              register={register}
              setValue={setValue}
              errors={errors}
              infoErrors={errors.info}
              index={index}
            />
          </Box>
        ))}
      </Box>
      <FullOverlapCheckBox register={register} setValue={setValue} control={control } />
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
