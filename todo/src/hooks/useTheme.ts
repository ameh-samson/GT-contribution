import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { themeStateType } from "../types";

export const useTheme = (): themeStateType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
