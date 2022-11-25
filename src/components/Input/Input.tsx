import { IInput } from "../../types/types";
import { StyledInput } from "./styles";

export const Input = ({ placeholder, type, value, onChange }: IInput) => {
  return <StyledInput type={type} placeholder={placeholder} onChange={onChange} value={value} />;
};
