import api from './api'

export const getUser =async() => {
    const response = await api.get('/me');
    return response.data;
}