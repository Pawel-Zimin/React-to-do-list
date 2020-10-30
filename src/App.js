import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import TasksDone from './components/TasksDone';
import TasksDoneContextProvider from './contexts/TasksDoneContext';
import TasksToDoContextProvider from './contexts/TasksToDoContext';
import ThemeContextProvider from './contexts/ThemeContext';

import './index.css';

function App() {
  return (
    <div className="App">

      <TasksDoneContextProvider>

        <TasksToDoContextProvider>

          <ThemeContextProvider>
            <Header />  
            <Form />
            <List />
            <TasksDone />
          </ThemeContextProvider>

        </TasksToDoContextProvider>
        
      </TasksDoneContextProvider>

    </div>
  );
}

export default App;