import { useState, FormEvent } from "react";
import { TaskAdd } from "../../type";

import { PlusCircle } from "phosphor-react";

import * as C from "./styles";

export const AddTask = ({ onClick }: TaskAdd) => {
  const [inputText, setInputText] = useState("");

  const handleAddNewTask = (event: FormEvent) => {
    event.preventDefault();
    inputText !== "" && onClick(inputText), setInputText("");
  };

  return (
    <C.Container>
      <form onClick={handleAddNewTask}>
        <input
          type="text"
          name="addTask"
          placeholder="Adicione uma nova task..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          autoComplete="off"
        />
        <C.AddTask hasTask={inputText}>
          <span>Criar</span>
          <PlusCircle size={20} />
        </C.AddTask>
      </form>
    </C.Container>
  );
};
