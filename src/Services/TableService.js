import axios from 'axios';

export function getAllManufacturers(pageNumber) {
    return axios.get(process.env.REACT_APP_TABLE_API + `api/misc/gettrades/5/${pageNumber}`)
}

export function postManufacturers(data) {
    return axios.post(process.env.REACT_APP_TABLE_API + `api/misc/savetrade`, data)
}