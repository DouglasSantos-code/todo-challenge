import { useState } from "react";
import * as C from "./styles";
import { Item } from "../../types/item";
import { Trash } from "phosphor-react";

type Props = {
  item: Item;
};

export const ListItems = ({ item }: Props) => {
  return (
    <C.Box>
      <div>
        <input type="checkbox" name="checkboxTask" />
        <label htmlFor="checkboxTask">{item.name}</label>
      </div>
      <C.Delete>
        <Trash size={20} />
      </C.Delete>
    </C.Box>
  );
};
