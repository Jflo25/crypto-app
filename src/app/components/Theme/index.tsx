import { createContext, useState, useContext, ReactNode } from 'react';

//must indicate a default theme value along with function 
const ThemeContext = createContext({
   theme: 'light', // Default theme value
   toggleTheme: () => { } // Default function, which does nothing initially
});

// Create custom hook to access the context 
export const ToggleTheme = () => useContext(ThemeContext);

//Defining the type of react children 
type ThemeProviderProps = {
   children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
   const [theme, setTheme] = useState('light');

   const toggleTheme = () => {
      setTheme((defaultTheme) => defaultTheme === "dark" ? "light" : "dark");
   }

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};
