import { createContext } from "react";

const BASE_URL = "http://localhost:3100/";

export const AppContext = createContext({ BASE_URL });
