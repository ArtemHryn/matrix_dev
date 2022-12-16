import { useForm } from 'react-hook-form';
import { ButtonCalc, DataBox, Date, Form, Input } from './MatrixData.styled';

export const MatrixData = ({ isShowedMatrix, addName, addDate }) => {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = ({ name, day, month, year }) => {
    const date = {day, month, year}
    isShowedMatrix(true)
    addName(name)
    addDate(date)
  };

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <Input placeholder="Имя" type="text" {...register('name')} />
      <DataBox>
        <Date
          width="108px"
          type="text"
          maxLength="2"
          {...register('day')}
          placeholder="день"
        />
        <Date
          width="108px"
          type="text"
          {...register('month')}
          maxLength="2"
          minLength="1"
          placeholder="месяц"
        />
        <Date
          width="136px"
          type="text"
          {...register('year')}
          maxLength="4"
          minLength="1"
          placeholder="год"
        />
      </DataBox>
      <ButtonCalc type="submit">Рассчитать личную матрицу судьбы</ButtonCalc>
    </Form>
  );
};
