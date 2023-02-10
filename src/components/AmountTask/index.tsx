import * as C from './styles';

export const AmountTask = ({ calcTotalTask, calcTotalTaskComplete }: any) => {
  return (
    <C.Container>
      <C.TotalTask>
        <span>Tarefas criadas</span>
        <div>
          <span>{calcTotalTask}</span>
        </div>
      </C.TotalTask>
      <C.TaskCompleted>
        <span>Concluídas</span>
        <div>
          {calcTotalTask > 0 ? (
            <span>
              {calcTotalTaskComplete} de {calcTotalTask}
            </span>
          ) : (
            <span>{calcTotalTask}</span>
          )}
        </div>
      </C.TaskCompleted>
    </C.Container>
  );
};
