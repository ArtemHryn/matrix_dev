import { Button, ButtonsList, ButtonsListItem, LockInButton } from './ButtonList.styled';

export const ButtonList = ({ list }) => {
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
