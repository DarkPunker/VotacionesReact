import { types } from "../types/types";

const initialState = {
    positions: [{
        idcargo: '',
        nombre_cargo: ''
    }]
};

export const positionReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.loadedPosition:
            return{
                ...state,
                positions: [...action.payload]
            }
    
        default:
            return state;
    }
}
