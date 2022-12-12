import { Button, ButtonsList, ButtonsListItem } from './ButtonList.styled';

export const ButtonList = () => {
  return (
    <ButtonsList>
      <ButtonsListItem>
        <Button to="personal">ЛИЧНАЯ МАТРИЦА</Button>
      </ButtonsListItem>
      <ButtonsListItem>
        <Button to="compatibility">СОВМЕСТИМОСТЬ</Button>
      </ButtonsListItem>
      <ButtonsListItem>
        <Button to='deep_calc'>ГЛУБИННЫЕ РАСЧЕТЫ</Button>
      </ButtonsListItem>
    </ButtonsList>
  );
};
