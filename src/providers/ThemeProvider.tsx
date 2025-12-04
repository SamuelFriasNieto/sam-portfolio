'use client'
import { createContext, useEffect, useState } from "react";



interface ThemeType {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const ThemeContext = createContext<ThemeType>({
  theme: "light",
  setTheme: (theme: "light" | "dark" | "system") => {},
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark" >("dark");

  return (
    <ThemeContext.Provider 
      value={{ 
        theme: theme, 
        setTheme: setTheme as (theme: "light" | "dark") => void 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
