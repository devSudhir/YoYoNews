import { createContext, useState } from "react";

export const ThemeContext = createContext({
  darkTheme: false,
  handleTheme: () => {},
});

export const ThemeProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const handleTheme = (theme) => {
    setDarkTheme(!darkTheme);
  };
  return (
    <ThemeContext.Provider value={{ darkTheme, handleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
