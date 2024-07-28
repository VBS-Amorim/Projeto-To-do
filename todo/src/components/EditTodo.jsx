import React, { useState } from 'react';

const EditTodoForm = ({ currentTodo, editTodo, cancelEdit }) => {
  const [newTitle, setNewTitle] = useState(currentTodo.title);
  const [newComment, setNewComment] = useState(currentTodo.comment);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTitle && newComment) {
      editTodo(currentTodo.id, newTitle, newComment);
    }
  };

  return (
    <div className="edit-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Editar título"
        />
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Editar descrição"
        />
        <button type="submit">Salvar</button>
        <button type="button" onClick={cancelEdit}>Cancelar</button>
      </form>
    </div>
  );
};

export default EditTodoForm;
