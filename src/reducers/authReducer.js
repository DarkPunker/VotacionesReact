import { types } from "../types/types";

const initialState = {
    logged: false,
    name: ''
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                ...action.payload
            }
        case types.logout:
            return {
                logged: false
            }
        case types.islogged:
            const token = localStorage.getItem("logged")
            return {
                logged: token || false
            }
        default:
            return state;
    }

}