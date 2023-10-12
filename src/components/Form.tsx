import { useState } from "react";

export const Form = ({ createTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const addTodo = (e) => {
    // https://qiita.com/yokoto/items/27c56ebc4b818167ef9e
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
