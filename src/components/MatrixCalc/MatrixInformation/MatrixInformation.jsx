import { Box } from 'components/Box';
import { Matrix } from '../Matrix/Matrix';
import { Buttons } from './Buttons/Buttons';
import { Info, InfoSpan, Title } from './MatrixInformation.styled';

const buttons = [
  { name: 'Контракты Судьбы', disabled: false },
  { name: 'Матрица Здоровья', disabled: false },
  { name: 'Прогностика и Матрица периода', disabled: false },
  { name: 'Матрица Осознанности', disabled: true },
  { name: 'Матрица Души', disabled: true },
];

export const MatrixInformation = ({ name, date }) => {
  const { day, month, year } = date;

  const getAge = () => {
    const dateNow = new Date();
    if (month - 1 >= dateNow.getMonth() && day > dateNow.getDate()) {
      return dateNow.getFullYear() - year - 1;
    }
    return dateNow.getFullYear() - year;
  };

  return (
    <Box display="flex">
      <Box mr="122px">
        <Box mb="118px">
          <Title>Ваша матрица судьбы</Title>
          {name && (
            <Info>
              <InfoSpan>Имя: </InfoSpan>
              {name}
            </Info>
          )}
          <Info>
            <InfoSpan>Дата рождения: </InfoSpan>
            {day}.{month}.{year}
          </Info>
          <Info>
            <InfoSpan>Возраст: </InfoSpan>
            {getAge()}
          </Info>
        </Box>
        <Box display="flex" flexDirection="column">
          {buttons.map(button => (
            <Buttons
              name={button.name}
              disabled={button.disabled}
              key={button.name}
            />
          ))}
        </Box>
      </Box>
      <Matrix date={date} />
    </Box>
  );
};
