import { useState } from "react";

const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !comment) return;
        addTodo (title, comment);
        setComment("");
        setTitle ("");
    }

  return (
    <div className="todo-form"> 
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Título da tarefa"
            value= {title}
            onChange={(e)=> setTitle(e.target.value)}/>

            <input type="text" 
            placeholder="Descrição da tarefa" 
            value= {comment}
            onChange={(e)=> setComment(e.target.value)}/>
            <button type="submit">Inserir na lista</button>
        </form>
    </div>
  )
}

export default TodoForm
