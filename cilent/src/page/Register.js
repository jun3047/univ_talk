import styled from "styled-components";
import LoginLayout from "../component/loginLayout";

const LoginPage = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 33vh;
`;

function Register() {
  return (
    <LoginPage>
      <LoginLayout></LoginLayout>
    </LoginPage>
  );
}

export default Register;