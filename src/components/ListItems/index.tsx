import { useState } from 'react';
import { ContainerTaskItem } from '../../type';
import { Trash } from 'phosphor-react';
import * as C from './styles';

export const ListItems = ({ item, onClick }: ContainerTaskItem) => {
  const [isChecked, setIsChecked] = useState(item.done);

  function onDelete() {
    onClick(item.id);
  }
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
      <C.Delete onClick={onDelete}>
        <Trash size={20} />
      </C.Delete>
    </C.Box>
  );
};
