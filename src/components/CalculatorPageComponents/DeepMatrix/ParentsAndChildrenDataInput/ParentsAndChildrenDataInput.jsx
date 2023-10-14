import { useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useMatrix } from 'pages/Calculator';
import { Box } from 'components/Box';
import PartnerData from 'components/CalculatorPageComponents/CompatibilityMatrix/Partners/DataInput/PartnerData';
import { SubmitBtn } from 'components/CalculatorPageComponents/PersonalMatrix/DataInput/DataInput.styled';
import { MatrixNumber } from 'components/CalculatorPageComponents/CompatibilityMatrix/Partners/Partners.styled';

const ParentsAndChildrenDataInput = () => {
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
    document.activeElement.blur();
  };
  return (
    <Box as="form" mb={['87px']} onSubmit={handleSubmit(onSubmit)}>
      <Box display={[null, null, 'flex']} justifyContent="space-evenly">
        {fields.map((field, index) => (
          <Box key={field.id}>
            <MatrixNumber>
              {index === 0 ? t('motherMatrixTitle') : t('childMatrixTitle')}
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

export default ParentsAndChildrenDataInput;
