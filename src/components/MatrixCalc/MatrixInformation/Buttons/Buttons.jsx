import { Button } from "./Buttons.styled";

export const Buttons = ({ name, disabled, matrixName, setMatrixType }) => {
  return (
    <Button disabled={disabled} onClick={() => setMatrixType(matrixName)}>
      {name}
    </Button>
  );
};
