import styled from "styled-components";

const Container = styled.div`
  width: 40%;
  margin: 15% auto auto;

  @media (max-width: 780px) {
    width: 55%;
    margin-top: 30%;
  }

  @media (max-width: 470px) {
    width: 85%;
    margin-top: 55%;
  }
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  color: #000;
  text-align: center;
  margin: 0 0 45px;

  @media (max-width: 780px) {
    font-size: 24px;
    line-height: 35px;
  }
`;

const Subtitle = styled.p`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  margin: 0 0 45px;
  text-align: center;
  color: rgba(117, 108, 108, 0.57);

  @media (max-width: 780px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export { Title, Subtitle, Container };
