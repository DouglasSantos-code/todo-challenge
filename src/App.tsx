import { useState, useEffect } from "react";
import { TaskItem } from "./type";

import { getLocalStorage } from "./helpers/getTaskStorage";

import { AddTask } from "./components/AddTask";
import { AmountTask } from "./components/AmountTask";
import { Header } from "./components/Header";
import { ListItems } from "./components/ListItems";
import { WithoutTask } from "./components/WithoutTask";

import { v4 as idTask } from "uuid";

import { GlobalStyle } from "./App.style";

const App = () => {
  const [list, setList] = useState<TaskItem[]>(getLocalStorage());

  let taskCount = list.length;
  let taskCompleteCount = list.filter((task) => task.isComplete).length;

  const handleAddNewTask = (taskName: string) => {
    const createNewTask = [
      { id: idTask(), name: taskName, isComplete: false },
      ...list,
    ];
    setList(createNewTask);
  };

  const handleDeleteTask = (id: string) => {
    const taskWithoutDeletedOne = list.filter((task) => {
      return task.id !== id;
    });
    setList(taskWithoutDeletedOne);
  };

  const handleTaskComplete = (id: string, isComplete: boolean) => {
    const newList = [...list];
    newList.filter((task) => {
      if (task.id === id) {
        task.isComplete = isComplete;
      }
    });
    setList(newList);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <AddTask onClick={handleAddNewTask} />
      <AmountTask
        calcTotalTask={taskCount}
        calcTotalTaskComplete={taskCompleteCount}
      />
      {list.length < 1 && <WithoutTask />}
      {list.map((item, index) => (
        <ListItems
          key={index}
          item={item}
          onChange={handleTaskComplete}
          onClick={handleDeleteTask}
        ></ListItems>
      ))}
    </>
  );
};

export default App;
