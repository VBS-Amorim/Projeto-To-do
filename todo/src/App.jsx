import { useState } from 'react';
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Searching from "./components/Search";
import EditTodoForm from './components/EditTodo';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("A - Z");
  const [editingTodo, setEditingTodo] = useState(null);


  // Adiciona nova todo + data
  const addTodo = (title, comment) => {
    const newTodos = [
      ...todos,
      { id: Math.floor(Math.random() * 1000), title, comment, isCompleted: false, createdAt: new Date() }
    ];
    setTodos(newTodos);
  };

  // Exclui todo
  const exclTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  // Completa todo
  const completeTodo = (id) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  // Edita todo
  const editTodo = (id, newTitle, newComment) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, title: newTitle, comment: newComment } : todo
    );
    setTodos(updatedTodos);
    setEditingTodo(null); // Limpa o estado
  };

  // Cancela edição
  const cancelEdit = () => {
    setEditingTodo(null);
  };

  // Ordena e filtra todos os todos
  const sortedAndFilteredTodos = todos
    .filter(todo => filter === "All" ? true : filter === "Complete" ? todo.isCompleted : !todo.isCompleted)
    .filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "A - Z") {
        return a.title.localeCompare(b.title);
      } else if (sort === "Z - A") {
        return b.title.localeCompare(a.title);
      }
      return b.createdAt - a.createdAt;
    });

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Searching search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {sortedAndFilteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            exclTodo={exclTodo}
            completeTodo={completeTodo}
            setEditingTodo={setEditingTodo} // Passa a função de editar
          />
        ))}
      </div>
      {editingTodo && <EditTodoForm currentTodo={editingTodo} editTodo={editTodo} cancelEdit={cancelEdit} />}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
