import styled from 'styled-components';
import LoginLayout from '../component/loginLayout';




const LoginPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Login() {
    return (
      <LoginPage>
        <LoginLayout></LoginLayout>
      </LoginPage>
    );
  }
  
  export default Login;