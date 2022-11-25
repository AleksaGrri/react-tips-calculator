import styled from "styled-components";

const StyledInput = styled.input`
  height: 68px;
  background: #ffffff;
  border-radius: 30px;
  color: #000;
  padding: 15px;
  outline: none;
  border: none;
  margin-bottom: 17px;
  text-align: center;
  font-size: 18px;
  &::placeholder {
    color: rgba(117, 108, 108, 0.6);
    font-size: 18px;
  }
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export { StyledInput };
