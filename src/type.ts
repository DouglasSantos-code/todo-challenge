export type TaskItem = {
  id: number;
  name: string;
  done: boolean;
};

export type TaskAdd = {
  onClick: (taskName: string) => void;
};

export type ContainerTaskItem = {
  item: TaskItem;
  onClick: (id: number) => void;
};

export type inputWithoutText = {
  hasTask: string;
};

export type TaskDone = {
  done: boolean;
};
