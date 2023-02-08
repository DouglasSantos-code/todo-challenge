import * as C from './styles';

export const AmountTask = () => {
  return (
    <C.Container>
      <C.TotalTask>
        <span>Tarefas criadas</span>
        <div>
          <span>5</span>
        </div>
      </C.TotalTask>
      <C.TaskCompleted>
        <span>Concluídas</span>
        <div>
          <span>0</span>
        </div>
      </C.TaskCompleted>
    </C.Container>
  );
};
