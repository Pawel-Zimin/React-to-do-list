import React, { useContext, useState } from 'react';
import { TasksToDoContext } from '../contexts/TasksToDoContext';
import { ThemeContext } from '../contexts/ThemeContext';

import '../css/Form.css';

const Form = () => {
   const { addNewTask } = useContext(TasksToDoContext);
   const [text, setText] = useState('');

   const { theme } = useContext(ThemeContext);
   const { isLightTheme, light, dark } = theme;
   const currentTheme = isLightTheme ? light : dark;

   const handleSubmit = (event) => {
      event.preventDefault();
      addNewTask(text);
      setText('');
   }

   return (
      <form 
         className='form'
         onSubmit={handleSubmit}
         style={{ 
            color: currentTheme.color, 
            backgroundColor: currentTheme.bgc 
         }}>
         <label className='form__label label'>
            <p className='label__text'>Add something:</p>
            <input 
               type="text" 
               className='form__input' 
               placeholder='Enter a task'
               value={text}
               onChange={(event) => setText(event.target.value)}
               style={{ borderColor: currentTheme.color }}
               required
            />
            <input 
               type="submit"
               className='form__button' 
               value='ADD'
               style={{ 
                  color: currentTheme.color, 
                  backgroundColor: currentTheme.bgc, 
                  borderColor: currentTheme.color 
               }}
            />
         </label>
      </form>
   );
}
 
export default Form;