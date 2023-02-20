import styled from 'styled-components';

const Button = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => (props.main ? "black" : "white")};
  color: ${(props) => (props.main ? "white" : "black")};
  border: 1px solid black;
  width: 129px;
  height: 31px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.3px;
`;
  
  export default Button;
  