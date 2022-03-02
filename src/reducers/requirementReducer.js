import { types } from "../types/types";

const initialState = {
    requirements: [{
        idrequisito: 0,
        nombre_requisito: ''
    }]
};

export const requirementReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.loadedRequirement:
            return {
                ...state,
                requirements: [...action.payload]
            }
        default:
            return state;
    }
}