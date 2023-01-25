import Axios from 'axios';

export const bankApi = Axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});