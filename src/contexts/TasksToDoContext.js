import React, { createContext, useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TasksDoneContext } from './TasksDoneContext';

export const TasksToDoContext = createContext();

const TasksToDoContextProvider = props => {
   const { tasksDone, setTasksDone } = useContext(TasksDoneContext);
   
   const [tasksToDo, setTasksToDo] = useState(() => {
      const localData = localStorage.getItem('tasksToDo');
      return localData ? JSON.parse(localData) : [];
   });

   useEffect(() => {
      localStorage.setItem('tasksToDo', JSON.stringify(tasksToDo))
   }, [tasksToDo]);

   const addNewTask = text => {
      setTasksToDo([...tasksToDo, {text, id: uuidv4()}]);
   }

   const removeTask = id => {
      setTasksDone([...tasksDone, ...tasksToDo.filter(task => task.id === id)]);
      setTasksToDo(tasksToDo.filter(task => task.id !== id));
   }

   return (
      <TasksToDoContext.Provider value={{tasksToDo, addNewTask, removeTask}}>
         { props.children }
      </TasksToDoContext.Provider>
   );
}

export default TasksToDoContextProvider;