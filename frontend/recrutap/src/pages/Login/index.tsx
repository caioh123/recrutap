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
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/icons/TechDash.png'
import { Mail, Lock } from 'lucide-react'


const LoginPage: React.FC = () => {
    const navigate = useNavigate()
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

                    <Button onClick={() => navigate("/dashboard")}>ENTRAR</Button>
                    <ForgotPassword>Esqueceu a senha?</ForgotPassword>
                </LoginBox>
            </Wrapper>
        </Container>
    )
}

export default LoginPage