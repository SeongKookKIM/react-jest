import React, { useEffect, useState } from "react";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setTodoList(json))
      .catch(() => {
        setErrMsg("에러 발생...");
      });
  }, []);

  return (
    <>
      <h1>Todo</h1>
      {errMsg ? (
        <p>{errMsg}</p>
      ) : (
        <ul>
          {todoList.map((todo) => {
            return (
              <li
                key={todo.id}
                style={{
                  textDecoration: todo.completed ? "line-through" : undefined,
                }}
              >
                {todo.title}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default TodoList;
