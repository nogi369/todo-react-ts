import { FC, useState } from "react";

type FormPropType = {
  createTodo: Function;
};

export const Form: FC<FormPropType> = ({ createTodo }) => {
  const [inputValue, setInputValue] = useState("");

  // const addTodo = (e: { preventDefault: () => void }) => {
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: inputValue,
    };

    createTodo(newTodo);
    setInputValue("");
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button>追加</button>
    </form>
  );
};
