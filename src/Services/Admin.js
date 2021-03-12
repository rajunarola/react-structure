import axios from 'axios';

export function adminLogin(data) {
    return axios.post(process.env.REACT_APP_API_URL + `Account/AdminLogin`, data)
}