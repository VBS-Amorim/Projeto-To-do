import React from 'react';

const Todo = ({ todo, exclTodo, completeTodo, setEditingTodo }) => {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div className="content">
        <p>{todo.title}</p>
        <p className="comment">{todo.comment}</p>
      </div>
      <div>
        <button className="completo" onClick={() => completeTodo(todo.id)}>Finalizar</button>
        <button className="excluir" onClick={() => exclTodo(todo.id)}>Excluir</button>
        <button onClick={() => setEditingTodo(todo)}>Editar</button> {/* Botão de editar */}
      </div>
    </div>
  );
}

export default Todo;
