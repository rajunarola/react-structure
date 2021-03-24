export const GET_ALL_DATA_SUCCESS = 'GET_ALL_DATA_SUCCESS';
export const GET_ALL_DATA_ERROR = 'GET_ALL_DATA_ERROR';

export function getAllData(data) {
    return {
        type: GET_ALL_DATA_SUCCESS,
        payload: data
    }
}

export function getAllDataError(error) {
    return {
        type: GET_ALL_DATA_ERROR,
        payload: error
    }
}