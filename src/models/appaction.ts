export type AppActionType =
    | { type: "SET_PAGE"; payload: number }
    | { type: "SET_SEARCH_QUERY"; payload: string }
    | { type: "SET_LOADING"; payload: boolean }
    | { type: "SET_NO_RESULTS"; payload: boolean };
