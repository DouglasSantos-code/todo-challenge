import { ContainerTaskItem } from "../../type";
import { Trash } from "phosphor-react";
import * as C from "./styles";
import { CheckIcon } from "@radix-ui/react-icons";

export const ListItems = ({ item, onClick, onChange }: ContainerTaskItem) => {
  const onDelete = () => {
    onClick(item.id);
  };
  return (
    <C.Box>
      <C.ContainerCheckbox isComplete={item.isComplete}>
        {item.isComplete && <CheckIcon />}
      </C.ContainerCheckbox>

      <C.Input isComplete={item.isComplete}>
        <input
          type="checkbox"
          name="checkboxTask"
          checked={item.isComplete}
          onChange={(e) => onChange(item.id, e.target.checked)}
        />
        <label htmlFor="checkboxTask">{item.name}</label>
      </C.Input>
      <C.Delete onClick={onDelete}>
        <Trash size={20} />
      </C.Delete>
    </C.Box>
  );
};
