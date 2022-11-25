import { StylesConfig } from "react-select";

export const styles: StylesConfig = {
  control: (baseStyles) => ({
    ...baseStyles,
    width: "100%",
    height: "68px",
    borderRadius: "30px",
    border: "none",
    outline: "none",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",
    padding: "0",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    marginLeft: "50px",
    textAlign: "center",
    fontSize: "18px",
    color: "#756c6c",
    opacity: "0.6",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    caretColor: "transparent",
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    marginRight: "20px",
    padding: "0",
    boxSizing: "border-box",
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    width: "100%",
    border: "none",
    boxShadow: "none",
    borderRadius: "30px",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    padding: "20px",
  }),
  option: (styles) => {
    return {
      ...styles,
      borderRadius: "30px",
      height: "68px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "15px",
    };
  },
};
