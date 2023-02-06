import * as C from './styles';
import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';

type Props = {
  onClick: (taskName: string) => void;
};

export const AddTask = ({ onClick }: Props) => {
  const [inputText, setInputText] = useState('');

  function handleAddNewTask() {
    onClick(inputText);
    setInputText('');
  }
  return (
    <C.Container>
      <input
        type="text"
        name="addTask"
        placeholder="Adicione uma nova task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <C.AddTask onClick={handleAddNewTask}>
        <span>Criar</span>
        <PlusCircle size={20} />
      </C.AddTask>
    </C.Container>
  );
};
