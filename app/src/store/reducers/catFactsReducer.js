import {FETCH_CAT_FACTS_START, FETCH_CAT_FACTS_SUCCESS, FETCH_CAT_FACTS_FAIL} from "../actions";

const initialState = {
    catFacts:[],
    isLoading: false,
    error: ''
};

export const catFactsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CAT_FACTS_START:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case FETCH_CAT_FACTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                catFacts:action.payload
            }
    case FETCH_CAT_FACTS_FAIL:
        return {
            ...state,
            isLoading:false,
            error: action.type.error
        }
        default: return state;
    }
};