import * as C from './styles';
import { ClipboardText } from 'phosphor-react';

export const WithoutTask = () => {
  return (
    <C.Container>
      <C.Icon>
        <ClipboardText size={56} />
      </C.Icon>
      <C.Text>
        <span>Você ainda não tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </C.Text>
    </C.Container>
  );
};
