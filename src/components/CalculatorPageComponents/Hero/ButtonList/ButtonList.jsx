import { useTranslation } from 'react-i18next';
import getCalcButtonList from 'helper/calcButtonList';
import {
  Button,
  ButtonsList,
  ButtonsListItem,
  LockInButton,
} from './ButtonList.styled';

export const ButtonList = () => {
  const { i18n } = useTranslation();
  return (
    <ButtonsList>
      {getCalcButtonList(i18n.language).map(({ name, to, disabled }) => (
        <ButtonsListItem key={name}>
          <Button as={disabled ? 'button' : null} to={to} disabled={disabled}>
            {name} {disabled && <LockInButton />}
          </Button>
        </ButtonsListItem>
      ))}
    </ButtonsList>
  );
};
