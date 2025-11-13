import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

function ToDoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [editing, setEditing] = useState(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleDueDateChange = (e) => setDueDate(e.target.value);
  const handlePriorityChange = (e) => setPriority(e.target.value);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      if (editing !== null) {
        const updatedTodos = todos.map(todo =>
          todo.id === editing ? { ...todo, text: inputValue, dueDate, priority } : todo
        );
        setTodos(updatedTodos);
        setEditing(null);
      } else {
        setTodos([
          ...todos,
          { id: Date.now(), text: inputValue, completed: false, dueDate, priority },
        ]);
      }
      setInputValue('');
      setDueDate('');
      setPriority('Medium');
    }
  };

  const startEditing = (todo) => {
    setEditing(todo.id);
    setInputValue(todo.text);
    setDueDate(todo.dueDate);
    setPriority(todo.priority);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>Advanced To-Do List</h1>
      <div className="input-section">
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={editing ? "Update your task..." : "Add a new task..."}
          />
          <input
            type="date"
            value={dueDate}
            onChange={handleDueDateChange}
            className="due-date-input"
          />
          <select value={priority} onChange={handlePriorityChange} className="priority-select">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={handleSubmit}>{editing ? 'Update' : 'Add'}</button>
        </div>
      </div>

      <div className="filter-container">
        <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('Active')} className={filter === 'Active' ? 'active' : ''}>Active</button>
        <button onClick={() => setFilter('Completed')} className={filter === 'Completed' ? 'active' : ''}>Completed</button>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id} className={`${todo.completed ? 'completed' : ''} priority-${todo.priority.toLowerCase()}`}>
            <div className="todo-details">
              <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
              {todo.dueDate && (
                <small className="due-date">
                  Due: {format(new Date(todo.dueDate), 'MMM dd, yyyy')}
                </small>
              )}
            </div>
            <div className="todo-actions">
              <button onClick={() => startEditing(todo)} className="edit-btn">Edit</button>
              <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
