import { createContext, useState } from "react";
import { childrenPropType, themeStateType } from "../types";

const ThemeContext = createContext<themeStateType | undefined>(undefined);



export const ThemeProvider = ({ children }: childrenPropType) => {
    const [theme, setTheme] = useState('light');

    const value = { theme, setTheme };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
