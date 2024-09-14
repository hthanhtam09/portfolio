import { createContext, Dispatch, SetStateAction } from "react";
import { ThemeMode } from "@/enums";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: Dispatch<SetStateAction<ThemeMode>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeMode.DARK,
  setTheme: () => {},
});
