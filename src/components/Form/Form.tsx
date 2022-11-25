import { useState, useEffect, FormEvent } from "react";
import { useInput } from "../../hooks/useInput";
import { IOption } from "../../types/types";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { Total, StyledForm } from "./styles";

export const Form = () => {
  const options: IOption[] = [
    { value: 10, label: "10%" },
    { value: 15, label: "15%" },
    { value: 20, label: "20%" },
  ];

  const bill = useInput();
  const countPersons = useInput();
  const [procent, setProcent] = useState(options[0]);
  const [tips, setTips] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const changeProcentValue = (event: IOption) => {
    setProcent(event);
  };

  const getTotalPrice = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTips((+bill.value + (+bill.value * +procent.value) / 100) / +countPersons.value);
  };

  useEffect(() => {
    bill.value && countPersons.value ? setIsVisible(false) : setIsVisible(true);
  }, [bill.value, countPersons.value]);
  return (
    <StyledForm>
      <Input placeholder={"Enter Bill"} type={"number"} {...bill} />
      <Input placeholder={"Enter Persons"} type={"number"} {...countPersons} />
      <CustomSelect options={options} value={procent} onChange={changeProcentValue} />
      <Total>Total: {tips.toFixed(2)} $</Total>
      <Button onClick={getTotalPrice} isDisabled={isVisible} />
    </StyledForm>
  );
};
