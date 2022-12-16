import { useForm } from 'react-hook-form';
import { CodeElement } from './CodeElement/CodeElement';
import { Button, CodeItem, CodeList, Form } from './GenerateMatrix.styled';

const table = [
  { name: 'topLeft1' },
  { name: 'month' },
  { name: 'topRight1' },
  { name: 'day' },
  { name: 'center' },
  { name: 'year' },
  { name: 'bottomLeft1' },
  { name: 'bottom1' },
  { name: 'bottomRight1' },
];

export const GenerateMatrix = ({ setIsGenerated, isShowedMatrix, addDate }) => {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = data => {
    setIsGenerated(true)
    isShowedMatrix(true)
    addDate(data)
  };
  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <Button>Сгенерировать девятиричную матрицу</Button>
      <CodeList>
        {table.map(input => (
          <CodeItem key={input.name}>
            <CodeElement name={input.name} register={register} />
          </CodeItem>
        ))}
      </CodeList>
    </Form>
  );
};
