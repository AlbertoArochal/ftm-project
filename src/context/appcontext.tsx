import { createContext } from "react";

const BASE_URL = "http://localhost:3100/";

const initialState = {
    images: [],
    BASE_URL,
    page: 1,
    searchquery: "",
};

export const AppContext = createContext(initialState);
