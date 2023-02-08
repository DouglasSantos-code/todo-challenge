import { useState } from 'react';
import { TaskItem } from './type';

import { AddTask } from './components/AddTask';
import { AmountTask } from './components/AmountTask';
import { ListItems } from './components/ListItems';
import { WithoutTask } from './components/WithoutTask';

import { v4 as idTask } from 'uuid';

import { GlobalStyle } from './App.style';
import * as C from './App.style';

const App = () => {
  const [list, setList] = useState<TaskItem[]>([]);

  function handleAddNewTask(taskName: string) {
    const createNewTask = [...list, { id: idTask(), name: taskName, isComplete: false }];
    setList(createNewTask);
  }

  function handleDeleteTask(id: string) {
    const taskWithoutDeletedOne = list.filter((task) => {
      return task.id !== id;
    });
    setList(taskWithoutDeletedOne);
  }

  function handleTaskComplete(id: string, isComplete: boolean) {
    const newList = [...list];
    newList.filter((item) => {
      if (item.id === id) {
        item.isComplete = isComplete;
      }
    });
    setList(newList);
  }

  console.log(list);

  return (
    <>
      <GlobalStyle />
      <C.Header>Todo</C.Header>
      <AddTask onClick={handleAddNewTask} />
      <AmountTask />
      {list.length < 1 && <WithoutTask />}
      {list.map((item, index) => (
        <ListItems key={index} item={item} onChange={handleTaskComplete} onClick={handleDeleteTask}></ListItems>
      ))}
    </>
  );
};

export default App;
