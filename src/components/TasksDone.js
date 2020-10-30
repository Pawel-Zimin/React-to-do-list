import React, { useContext } from 'react';
import { TasksDoneContext } from '../contexts/TasksDoneContext';
import { ThemeContext } from '../contexts/ThemeContext';

import DoneListElement from './DoneListElement';

const TasksDone = () => {
   const { tasksDone } = useContext(TasksDoneContext);

   const { theme } = useContext(ThemeContext);
   const { isLightTheme, light, dark } = theme;
   const currentTheme = isLightTheme ? light : dark;

   return (
      <div className='tasksDoneWrapper' style={{ color: currentTheme.color, backgroundColor: currentTheme.bgc }}>
         <p className='tasksDoneList__title'>Tasks done:</p>
         <ul className="tasksDoneList">
            { tasksDone.map(task => <DoneListElement task={task} key={ task.id} />) }
         </ul>
      </div>
   );
}
 
export default TasksDone;