import React, { createContext, useState, useEffect } from 'react';

export const TasksDoneContext = createContext();

const TasksDoneContextProvider = (props) => {
   const [tasksDone, setTasksDone] = useState(() => {
      const localData = localStorage.getItem('tasksDone');
      return localData ? JSON.parse(localData) : [];
   });

   useEffect(() => {
      localStorage.setItem('tasksDone', JSON.stringify(tasksDone));
   }, [tasksDone]);

   const removeDoneTask = (id) => {
      setTasksDone(tasksDone.filter(task => task.id !== id));
   }

   return (
      <TasksDoneContext.Provider value={{ tasksDone, setTasksDone, removeDoneTask }}>
         { props.children }
      </TasksDoneContext.Provider>
   );
}

export default TasksDoneContextProvider;