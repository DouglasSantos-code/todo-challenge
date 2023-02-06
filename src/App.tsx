import { useState } from 'react';
import { Item } from './types/item';
import { ListItems } from './components/ListItems';
import { AddTask } from './components/AddTask';

import * as C from './App.style';
import { GlobalStyle } from './App.style';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Primeira task', done: false },
    { id: 2, name: 'Segunda task', done: false }
  ]);

  function handleAddNewTask(taskName: string) {
    const createNewTask = [...list, { id: list.length + 1, name: taskName, done: false }];
    setList(createNewTask);
  }

  function handleDeleteTask(id: number) {
    const taskWithoutDeletedOne = list.filter((task) => {
      return task.id !== id;
    });
    setList(taskWithoutDeletedOne);
  }

  return (
    <>
      <GlobalStyle />
      <C.Header>Todo</C.Header>

      <AddTask onClick={handleAddNewTask} />

      {/* Tasks criadas e tasks concluidas */}

      {list.map((item, index) => (
        <ListItems key={index} item={item} onClick={handleDeleteTask}></ListItems>
      ))}
    </>
  );
};

export default App;
