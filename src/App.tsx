import { useState } from "react";
import { Item } from "./types/item";
import { ListItems } from "./components/ListItems";

import * as C from "./App.style";
import { GlobalStyle } from "./App.style";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Primeira task", done: false },
    { id: 2, name: "Segunda task", done: false },
  ]);

  return (
    <>
      <GlobalStyle />
      <C.Header>Todo</C.Header>

      {/* Add task */}

      {/* Tasks criadas e tasks concluidas */}

      {/* Tasks */}
      {list.map((item, index) => (
        <ListItems key={index} item={item}></ListItems>
      ))}
    </>
  );
};

export default App;
