import { useState } from "react";
import * as C from "./styles";
import { Item } from "../../types/item";
import { Trash } from "phosphor-react";

type Props = {
  item: Item;
};

export const ListItems = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Box>
      <C.Input done={isChecked}>
        <input
          type="checkbox"
          name="checkboxTask"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="checkboxTask">{item.name}</label>
      </C.Input>
      <C.Delete>
        <Trash size={20} />
      </C.Delete>
    </C.Box>
  );
};
