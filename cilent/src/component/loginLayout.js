import styled from "styled-components";
import Button from "../element/Button";
import { TextField, Title, SubTitle } from "../element/Text";
import {LoginPageData} from "../pageData/loginPageData"

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 274px;
  gap: 9px;
`;

const FlexBox = styled.div`
  flex: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 4px;
`;

function LoginLayout() {
  return (
    <LoginWrapper>
      <TitleWrapper>
        <Title>대학수다</Title>
        <FlexBox />
        <SubTitle>{LoginPageData.subtitle}</SubTitle>
      </TitleWrapper>

      {LoginPageData.inputArr.map((data,i) => {
        return <TextField placeholder={data.placeholder} type={data.type} key={i} ></TextField>;
      })}

      <ButtonWrapper>
        <Button onClick={LoginPageData.subBtn.handler} main={false}>{LoginPageData.subBtn.Text}</Button>
        <FlexBox />
        <Button onClick={LoginPageData.mainBtn.handler} main={true}>{LoginPageData.mainBtn.Text}</Button>
      </ButtonWrapper>
    </LoginWrapper>
  );
}

export default LoginLayout;
