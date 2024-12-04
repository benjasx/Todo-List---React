import { useReducer, useState } from "react";

const initialTodos = [
  { id: 1, title: "todo #1" },
  { id: 2, title: "todo #2" },
];

const types = {
  add: "add",
  update: "update",
  delete: "delete",
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.delete:
      return state.filter((todo) => todo.id !== action.payload);
    case types.add:
      return [...state, action.payload];
    case types.update: {
      const todoEdit = action.payload;
      return state.map(todo => todo.id === todoEdit.id ? todoEdit : todo);
    }
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null); // Para manejar la tarea en edición
  const [error, setError] = useState(""); // Para mostrar un error si el texto está vacío

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (text.trim() === "") {
      setError("Please enter a task.");
      return;
    }

    setError(""); // Limpiar el error si el texto no está vacío
    
    const newTodo = { id: Date.now(), title: text };
    if (editId) {
      // Si hay un ID de tarea en edición, actualizamos la tarea
      dispatch({
        type: types.update,
        payload: { ...newTodo, id: editId }, // Usamos el ID de la tarea que se está editando
      });
      setEditId(null); // Limpiar el estado de edición después de actualizar
    } else {
      // Si no estamos editando, agregamos una nueva tarea
      dispatch({
        type: types.add,
        payload: newTodo,
      });
    }

    setText(""); // Limpiar el campo de texto
  };

  const handleEdit = (todo) => {
    setText(todo.title); // Colocar el título de la tarea en el campo de texto
    setEditId(todo.id); // Establecer el ID de la tarea para indicar que está en edición
  };

  return (
    <>
      <h1>TodoApp</h1>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Mostrar el mensaje de error */}
      
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button
              onClick={() =>
                dispatch({
                  type: types.delete,
                  payload: todo.id,
                })
              }
            >
              Delete
            </button>

            <button onClick={() => handleEdit(todo)}>Edit</button> {/* Botón para editar */}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value={editId ? "Update" : "Add"} />
      </form>
    </>
  );
}

export default App;
