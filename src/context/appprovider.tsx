import { AppContext } from "./appcontext";
import { Appreducer } from "../reducer/appreducer";
import { initialState } from "./appcontext";
import { ReactNode, useReducer } from "react";

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(Appreducer, initialState);

    const contextValue = {
        ...state,
        dispatch,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
