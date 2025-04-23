import api from './api';

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

export const signIn = (params:signInParams) => {
    const {email, password} = params
  return api.post('/auth/signin', { email, password });
};

export const signUp = (params: signUpParams) => {
    const {name, email, password, role} = params

    return api.post('/auth/signup', {name, email, password, role})
}