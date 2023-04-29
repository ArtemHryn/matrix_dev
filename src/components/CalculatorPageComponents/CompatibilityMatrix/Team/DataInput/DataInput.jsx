import { useFieldArray, useForm } from 'react-hook-form';
import { Box } from 'components/Box';
import InputLine from './InputLine/InputLine';
import {
  BoxTitle,
  SubmitBtn,
} from 'components/CalculatorPageComponents/PersonalMatrix/DataInput/DataInput.styled';
import { ReactComponent as Plus } from 'images/Calculator/CompatibilityMatrix/plus.svg';
import { AddBtn, AddBtnText } from './DataInput.styled';
import { useMatrix } from 'pages/Calculator';

const initialState = { date: '', name: '' };

const gradient =
  'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(249, 237, 255, 0.3) 100%)';

const DataInput = () => {
  const { setPartnersDate, setShowMatrix } = useMatrix();

  const { register, control, handleSubmit, setValue } = useForm({
    defaultValues: {
      info: [initialState, initialState, initialState],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'info',
    control,
  });

  const onFormSubmit = data => {
    const teamInfo = [];
    data.info.forEach(element => {
      const [day, month, year] = element.date.split('.');
      teamInfo.push({ day, month, year, name: element.name });
    });
    setPartnersDate(teamInfo);
    setShowMatrix(true);
  };

  const isHidenButton = fields.length >= 6;

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onFormSubmit)}
      m={['0 auto 40px', ' 0 auto 60px']}
      maxWidth="370px"
    >
      <Box
        backgroundImage={gradient}
        border="1px solid #72499B"
        borderRadius="14px"
        px="40px"
        py="36px"
        mb="26px"
      >
        <BoxTitle>Ввод данных</BoxTitle>
        {fields.map((field, index) => (
          <InputLine
            key={field.id}
            index={index}
            register={register}
            remove={remove}
            setValue={setValue}
          />
        ))}
        {!isHidenButton && (
          <Box display="flex" gridGap="6px" alignItems="center">
            <AddBtn type="button" onClick={() => append()}>
              <Plus />
            </AddBtn>
            <AddBtnText>добавить</AddBtnText>
          </Box>
        )}
      </Box>
      <SubmitBtn
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileFocus={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Рассчитать
      </SubmitBtn>
    </Box>
  );
};

export default DataInput;
