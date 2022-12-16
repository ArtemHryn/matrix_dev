import { Input } from "./CodeElement.styled";

export const CodeElement = ({register, name}) => {
    return <Input {...register(`${name}`)} type='number' max='22' required/>;
}