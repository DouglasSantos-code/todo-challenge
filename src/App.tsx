import { useState } from 'react';
import { TaskItem } from './type';

import { AddTask } from './components/AddTask';
import { AmountTask } from './components/AmountTask';
import { ListItems } from './components/ListItems';
import { WithoutTask } from './components/WithoutTask';

import { GlobalStyle } from './App.style';
import * as C from './App.style';

const App = () => {
  const [list, setList] = useState<TaskItem[]>([]);

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
      <AmountTask />
      {list.length < 1 && <WithoutTask />}
      {list.map((item, index) => (
        <ListItems key={index} item={item} onClick={handleDeleteTask}></ListItems>
      ))}
    </>
  );
};

export default App;
