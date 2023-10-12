import { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";

export const Todo = () => {
  const TODO_LIST = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(TODO_LIST);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <List todoList={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </>
  );
};
