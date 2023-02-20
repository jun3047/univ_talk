import { useState } from "react";
import styled from "styled-components";
import Button from "../element/Button";
import { TextField, Title, SubTitle } from "../element/Text";
import {LoginPageData, EmailPageData, CheckPageData, IDPWPageData, NickNamePageData} from "../pageData/loginPageData"

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

  const [nowPageNum,setNowPageNum] = useState(0);
  const allPageData = [LoginPageData, EmailPageData, CheckPageData, IDPWPageData, NickNamePageData];
  const nowPage = allPageData[nowPageNum]

  return (
    <LoginWrapper>
      <TitleWrapper>
        <Title>대학수다</Title>
        <FlexBox />
        <SubTitle>{nowPage.subtitle}</SubTitle>
      </TitleWrapper>

      {nowPage.inputArr.map((data,i) => {
        return <TextField placeholder={data.placeholder} type={data.type} key={i} ></TextField>;
      })}

      <ButtonWrapper>
        <Button onClick={nowPage.subBtn.handler} main={false}>{nowPage.subBtn.Text}</Button>
        <FlexBox />
        <Button onClick={()=>{setNowPageNum(nowPageNum+1)}} main={true}>{nowPage.mainBtn.Text}</Button>
      </ButtonWrapper>
    </LoginWrapper>
  );
}

export default LoginLayout;