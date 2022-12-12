import { useForm } from 'react-hook-form';
import { ButtonCalc, Date, Input } from './MatrixData.styled';

export const MatrixData = () => {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = ({ name, date }) => {
    console.log(name);
    console.log(date);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Input placeholder="Имя" type="text" {...register('name')} />
      <div>
        <Date width="108px" type="text" maxLength="2" {...register('day')} />
        <Date
          width="108px"
          type="text"
          {...register('month')}
          maxLength="2"
          minLength="1"
        />
        <Date
          width="136px"
          type="text"
          {...register('year')}
          maxLength="4"
          minLength="1"
        />
      </div>
      <ButtonCalc type="submit">Рассчитать личную матрицу судьбы</ButtonCalc>
    </form>
  );
};
