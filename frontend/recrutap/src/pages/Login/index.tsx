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
import { Field, Form, Formik } from 'formik'
import { validationSchema } from './schema'
import { signIn } from '../../services/auth'

interface signUpParams {
    name: string;
    email: string;
    password: string;
    role: "recruiter" | "admin"
}

interface signInParams {
    email: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const navigate = useNavigate()

    const submitLogin = async (values: signInParams) => {
        console.log('Valores do forsasdasdmulário:', values)
        try {
            const { email, password } = values
            console.log('Valores do formulário:', values)
            const response = await signIn({ email, password });
            const token = response.data.token

            localStorage.setItem("tokenjwt", token)

            console.log("token", token)
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    }


    return (
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            validationSchema={validationSchema}
            onSubmit={submitLogin}
        >
            {({ touched, errors }) => (
                    <Container>
                        <Wrapper>
                <Form>
                            <LoginBox>
                                <img src={logo} alt="TecDash logo" />
                                <InputWrapper>
                                    <Icon>
                                        <Mail />
                                    </Icon>
                                    <Field
                                        name="email"
                                        label="email"
                                        type="email"
                                        as={Input}
                                        error={touched.email && errors.email}
                                        touched={touched.email}
                                    />
                                </InputWrapper>

                                <InputWrapper>
                                    <Icon>
                                        <Lock />
                                    </Icon>
                                    <Field
                                        name="password"
                                        label="password"
                                        type="password"
                                        as={Input}
                                        error={touched.password && errors.password}
                                        touched={touched.password}
                                    />
                                </InputWrapper>

                                <Button type='submit'>Enter</Button>
                                <ForgotPassword>Password lost?</ForgotPassword>
                            </LoginBox>
                </Form>
                        </Wrapper>
                    </Container> 
            )}

        </Formik>

    )
}

export default LoginPage