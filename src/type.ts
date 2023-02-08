export type TaskItem = {
  id: string;
  name: string;
  isComplete: boolean;
};

export type TaskAdd = {
  onClick: (taskName: string) => void;
};

export type ContainerTaskItem = {
  item: TaskItem;
  onClick: (id: string) => void;
  onChange: (id: string, isComplete: boolean) => void;
};

export type inputWithoutText = {
  hasTask: string;
};

export type TaskDone = {
  isComplete: boolean;
};
