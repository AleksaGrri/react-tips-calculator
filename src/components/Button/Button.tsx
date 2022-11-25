import { IButton } from "../../types/types";
import { StyledButton } from "./styles";

export const Button = ({ isDisabled, onClick }: IButton) => {
  return (
    <StyledButton onClick={onClick} disabled={isDisabled}>
      Ohhhoooo 🍻{" "}
    </StyledButton>
  );
};
