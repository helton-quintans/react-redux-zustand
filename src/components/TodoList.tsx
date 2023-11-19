import { useSelector } from "react-redux";

export function TodoList() {
  const todos = useSelector((store) => {
    return store.todo;
  });

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
