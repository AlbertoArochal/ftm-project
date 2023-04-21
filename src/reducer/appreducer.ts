import { AppActionType } from "../models/appaction";

const initialState = {
    page: 1,
    searchquery: "",
};

export const reducer = (state = initialState, action: AppActionType) => {
    switch (action.type) {
        case "SET_PAGE":
            return {
                ...state,
                page: action.payload,
            };
        case "SET_SEARCH_QUERY":
            return {
                ...state,
                searchquery: action.payload,
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload,
            };
        case "SET_NO_RESULTS":
            return {
                ...state,
                noresults: action.payload,
            };
        default:
            return state;
    }
};
