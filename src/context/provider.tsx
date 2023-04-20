import { AppContext } from "./appcontext";
import { ReactNode } from "react";

const BASE_URL = "http://localhost:3100/";
export const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <AppContext.Provider value={{ BASE_URL }}>
            {children}
        </AppContext.Provider>
    );
};
