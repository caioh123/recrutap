import React from 'react'
import {
    Container,
    Wrapper,
    LoginBox,
    Input,
    Button,
    InputWrapper,
    ForgotPassword,
    Icon,
} from './styles'
import logo from '../../assets/icons/TechDash.png'
import { Mail, Lock } from 'lucide-react'


const LoginPage: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <LoginBox>
                    <img src={logo} alt="TecDash logo" />
                    <InputWrapper>
                        <Icon>
                            <Mail />
                        </Icon>
                        <Input type="email" placeholder="email" />
                    </InputWrapper>

                    <InputWrapper>
                        <Icon>
                            <Lock />
                        </Icon>
                        <Input type="password" placeholder="senha" />
                    </InputWrapper>

                    <Button>ENTRAR</Button>
                    <ForgotPassword>Esqueceu a senha?</ForgotPassword>
                </LoginBox>
            </Wrapper>
        </Container>
    )
}

export default LoginPage