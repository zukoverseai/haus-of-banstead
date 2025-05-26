"use client";

import React, { createContext, useContext, ReactNode } from "react";

// Theme is now always 'light'
// type Theme = "light" | "dark"; // Original type
type Theme = "light";

interface ThemeContextProps {
  theme: Theme;
  // setTheme: (theme: Theme) => void; // Removed setTheme
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Theme is hardcoded to 'light'
  const theme: Theme = "light";

  // Removed useEffect that checked localStorage and system preference
  // Removed useEffect that added/removed 'dark' class and updated localStorage
  // The html element will not have the 'dark' class, effectively making it light themed by default with Tailwind

  // Removed setTheme function

  return (
    // Removed setTheme from the provider value
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
