import React, { createContext, useState, useEffect, ReactNode } from 'react';
import Todo from '../Types/TodoType';

// Define the shape of the TodosContext value
interface TodosContextProps {
  todos: Todo[];                    
  filter: string;                    
  addTodo: (newTodo: Todo) => void;   
  toggleComplete: (id: number) => void; 
  deleteTodo: (id: number) => void;  
  setFilter: (filter: string) => void; 
}

// Create the TodosContext with a default value of undefined
export const TodosContext = createContext<TodosContextProps | undefined>(undefined);

// Function to load todos from localStorage
export function loadTodosFromLocalStorage(): Todo[] {
  const savedTodos = localStorage.getItem('todos');
  try {
    return savedTodos ? JSON.parse(savedTodos) : []; // Return parsed todos or an empty array
  } catch (error) {
    console.error('Error parsing todos from localStorage:', error);
    return []; // Return an empty array if parsing fails
  }
}


export function TodosProvider({ children }: { children: ReactNode }) {
  // Initialize state with todos loaded from localStorage
  const [todos, setTodos] = useState<Todo[]>(loadTodosFromLocalStorage());
  const [filter, setFilter] = useState('all'); // Initialize filter state

  // Update localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo to the list
  const addTodo = (newTodo: Todo) => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  // Function to toggle the completion status of a todo
  const toggleComplete = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo by its ID
  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // Filter todos based on the current filter state
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true; // Show all todos if filter is 'all'
  });

  // Provide context values to children components
  return (
    <TodosContext.Provider value={{ todos: filteredTodos, filter, addTodo, toggleComplete, deleteTodo, setFilter }}>
      {children}
    </TodosContext.Provider>
  );
}
