'use client'
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: "light" | "dark" | "system") => {},
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("dark");

  return (
    <ThemeContext.Provider 
      value={{ 
        theme: theme, 
        setTheme: setTheme as (theme: "light" | "dark" | "system") => void 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
