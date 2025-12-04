import { useEffect, useState } from "react";

export const useThemeTimeout = (theme: "light" | "dark", delay: number) => {
  const [appliedTheme, setAppliedTheme] = useState(theme);
      useEffect(() => {
        setTimeout(() => {
          setAppliedTheme(theme);
        }, delay);
      }, [theme]);

    return appliedTheme;
    };