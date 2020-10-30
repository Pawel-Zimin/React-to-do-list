import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
   const [theme, setTheme] = useState({
      isLightTheme: true,
      light: {color: '#000', bgc: '#ddd'},
      dark: {color: '#ddd', bgc: '#222'}
   });

   const toggleTheme = () => {
      setTheme({
         isLightTheme: !theme.isLightTheme,
         light: {color: '#000', bgc: '#ddd'},
         dark: {color: '#ddd', bgc: '#222'}
      });
   }

   return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
         {props.children}
      </ThemeContext.Provider>
   );
}

export default ThemeContextProvider;

