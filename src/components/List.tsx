import { FC } from "react";
import { TodoType } from "./Todo";

// type ListPropType = {
//   id: number;
//   content: number;
// };
type ListPropType = {
  todoList: TodoType[];
  deleteTodo: Function;
};

// type ActionPropType = {
//   id: number;
// };

export const List: FC<ListPropType> = ({ todoList, deleteTodo }) => {
  const complete = (id: number) => {
    return deleteTodo(id);
  };

  return (
    <div>
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <button onClick={() => complete(todo.id)}>完了</button>
            <span>{todo.content}</span>
          </div>
        );
      })}
    </div>
  );
};
