import {
  Button,
  ButtonsList,
  ButtonsListItem,
  LockInButton,
} from './ButtonList.styled';

const list = [
  {
    name: 'ЛИЧНАЯ МАТРИЦА',
    to: 'personal/fateMatrix',
    disabled: false,
  },
  {
    name: 'СОВМЕСТИМОСТЬ',
    to: 'compatibility',
    disabled: true,
  },
  {
    name: 'ГЛУБИННЫЕ РАСЧЕТЫ',
    to: 'deep_calc',
    disabled: true,
  },
];

export const ButtonList = () => {
  return (
    <ButtonsList>
      {list.map(({ name, to, disabled }) => (
        <ButtonsListItem key={name}>
          <Button as={disabled ? 'button' : null} to={to} disabled={disabled}>
            {name} {disabled && <LockInButton />}
          </Button>
        </ButtonsListItem>
      ))}
    </ButtonsList>
  );
};
