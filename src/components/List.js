import React, { useContext } from 'react';
import { TasksToDoContext } from '../contexts/TasksToDoContext';
import { ThemeContext } from '../contexts/ThemeContext';

import ListElement from './ListElements';

import '../css/List.css';

const List = () => {
   const { tasksToDo } = useContext(TasksToDoContext);

   const { theme } = useContext(ThemeContext);
   const { isLightTheme, light, dark } = theme;
   const currentTheme = isLightTheme ? light : dark;

   return (
      <div style={{ color: currentTheme.color, backgroundColor: currentTheme.bgc }}>
         <ul className='list'>
            {tasksToDo.map(task => <ListElement task={task} key={task.id} />)}
         </ul>
      </div>
   );
}
 
export default List;