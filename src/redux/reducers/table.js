import { GET_ALL_DATA_ERROR, GET_ALL_DATA_SUCCESS } from "../action/TableAction";

const initialState = {
    data: []
};

const tableMap = {
    [GET_ALL_DATA_ERROR]: (state, action) => {
        return {
            ...state,
            data: action.payload
        }
    },
    [GET_ALL_DATA_SUCCESS]: (state, action) => {
        return {
            ...state,
            data: action.payload
        }
    }
}

export default function reducer(state = initialState, action = {}) {
    const fn = tableMap[action.type];
    return fn ? fn(state, action) : state;
}