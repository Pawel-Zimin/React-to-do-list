import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import TasksInfo from './TasksInfo';
import ToggleTheme from './ThemeToggle';

import '../css/Header.css';

const Header = () => {   
   const { theme } = useContext(ThemeContext);
   const { isLightTheme, light, dark } = theme;
   const currentTheme = isLightTheme ? light : dark;

   return (
      <div className='header' style={{ color: currentTheme.color, backgroundColor: currentTheme.bgc }}>
         <h2 className='header__title'>To Do List</h2>
         <ToggleTheme />
         <TasksInfo />
      </div>
   );
}
 
export default Header;