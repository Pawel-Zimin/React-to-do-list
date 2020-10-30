import React, { useContext } from 'react';
import { TasksToDoContext } from '../contexts/TasksToDoContext';

import '../css/List.css';

const ListElement = ({ task }) => {
   const { removeTask } = useContext(TasksToDoContext);

   return (
      <li onClick={() => removeTask(task.id)} className="listElement">
         <p className='listElement__text'>{task.text}</p>
      </li>
   );
}

export default ListElement;