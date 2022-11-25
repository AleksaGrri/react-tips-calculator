import Select from "react-select";
import { ICustomSelect } from "../../types/types";
import { styles } from "./styles";

export const CustomSelect = ({ onChange, value, options }: ICustomSelect) => {
  return <Select styles={styles} options={options} onChange={onChange} value={value} />;
};
