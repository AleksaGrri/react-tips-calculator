import styled from "styled-components";

const StyledButton = styled.button`
  background: #2ed2c9;
  height: 68px;
  width: 100%;
  text-align: center;
  color: #fff;
  border-radius: 30px;
  border: 2px solid #2ed2c9;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  &:hover {
    cursor: pointer;
    background: #eaf2f2;
    color: #114c49;
    transition: 0.5s;
  }
  &:disabled {
    opacity: 0.2;
    color: #ffffff;
    cursor: help;
    &:hover {
      background: #2ed2c9;
    }
  }
`;

export { StyledButton };
