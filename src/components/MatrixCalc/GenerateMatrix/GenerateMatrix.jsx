import { useForm } from 'react-hook-form';
import { CodeElement } from './CodeElement/CodeElement';
import { Button, CodeItem, CodeList, Form } from './GenerateMatrix.styled';

const table = [
  { name: 'top_left' },
  { name: 'month' },
  { name: 'top_right' },
  { name: 'day' },
  { name: 'center' },
  { name: 'year' },
  { name: 'bottom_left' },
  { name: 'middle_center' },
  { name: 'bottom_right' },
];

export const GenerateMatrix = () => {
  const { register, handleSubmit } = useForm();
  return (
    <Form onSubmit={handleSubmit()}>
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
