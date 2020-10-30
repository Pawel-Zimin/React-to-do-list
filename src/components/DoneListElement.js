import React, { useContext } from 'react';
import { TasksDoneContext } from '../contexts/TasksDoneContext';

import '../css/DoneList.css';

const DoneListElement = ({ task }) => {
   const { removeDoneTask } = useContext(TasksDoneContext);

   return (
      <li onClick={() => removeDoneTask(task.id)} className="doneListElement">
         <p className='doneListElement__text'>{task.text}</p>
      </li>
   );
}

export default DoneListElement;