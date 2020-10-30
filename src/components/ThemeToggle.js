import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import '../css/Header.css';

const ToggleTheme = () => {
   const { toggleTheme } = useContext(ThemeContext);
   const { theme } = useContext(ThemeContext);
   const { isLightTheme, light, dark } = theme;
   const currentTheme = isLightTheme ? light : dark;

   return (
      <button onClick={toggleTheme} style={{ color: currentTheme.color, backgroundColor: currentTheme.bgc, borderColor: currentTheme.color }}>Toggle the theme</button>
   );
}
 
export default ToggleTheme;