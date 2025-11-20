import { Monitor, Moon, Sun } from "lucide-react";
import React, { useContext, useState } from "react";
import { ThemeToggler } from "@/components/animate-ui/primitives/effects/theme-toggler";
import { ThemeContext } from "@/providers/ThemeProvider";

const AppThemeToggler = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("dark");
  const { theme: contextTheme, setTheme: contextSetTheme } = useContext(ThemeContext);
  return (
    <div className="flex items-center justify-center z-10">
      <ThemeToggler
        theme={theme}
        resolvedTheme={theme === "system" ? "dark" : theme}
        setTheme={setTheme}
      >
        {({ effective, toggleTheme }) => (
          <button
            onClick={() => {
              const nextTheme = effective === "light" ? "dark" : "light";
              toggleTheme(nextTheme);
              contextSetTheme(nextTheme);
            }}
          >
            {effective === "system" ? (
              <Monitor strokeWidth={1} />
            ) : effective === "dark" ? (
              <Moon strokeWidth={1} />
            ) : (
              <Sun strokeWidth={1} />
            )}
          </button>
        )}
      </ThemeToggler>
    </div>
  );
};

export default AppThemeToggler;