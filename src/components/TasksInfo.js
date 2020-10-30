import React, { useContext } from 'react';
import { TasksToDoContext } from '../contexts/TasksToDoContext';

const TasksInfo = () => {
   const { tasksToDo } = useContext(TasksToDoContext);

   return tasksToDo.length ? (
      <p className='header__taskInfo'>Tasks left: {tasksToDo.length}</p>
   ) : (
      <p className='header__taskInfo'>Everything's done!</p>
   );
}
 
export default TasksInfo;

