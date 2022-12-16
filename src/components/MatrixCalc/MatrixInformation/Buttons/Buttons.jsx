import { Button } from "./Buttons.styled";

export const Buttons = ({ name, disabled }) => {
  return <Button disabled={disabled}>{name}</Button>;
};
