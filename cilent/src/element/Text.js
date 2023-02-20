import styled from 'styled-components';

const TextField = styled.input`
  padding: 8px;
  box-sizing: border-box;
  width: 274px;
  height: 31px;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  
  &:focus{
     outline: none;
  }
`;


const Title = styled.h1`
  width: fit-content;
  margin: 0;
  padding: 0;
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.3px;

  color: #000000;
`;

const SubTitle = styled.p`
  margin: 0;
  padding: 0;
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  letter-spacing: -0.3px;
  color: #000000;
  vertical-align: bottom;
`;

  export {TextField, Title, SubTitle};
  