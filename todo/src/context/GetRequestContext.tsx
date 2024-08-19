import { createContext, useState } from "react";
import { childrenPropType } from "../types";

const GetRequestContext = createContext({});


export const GetRequestProvider = ({ children }: childrenPropType) => {
    const [todo, setTodo] = useState('sing a new song');

    const value = { todo, setTodo };

    return (
        <GetRequestContext.Provider value={value}>
            {children}
        </GetRequestContext.Provider>
    );
};

export default GetRequestContext;
