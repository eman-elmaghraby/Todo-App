import React, { useContext, useCallback, useMemo } from 'react';
import { Table } from 'react-bootstrap';
import './styles/TodoList.css'; 
import { TodosContext } from '../context/TodoContext';
import CustomCheckbox from '../hooks/CustomCheckbox';
import Filter from './Filter';

const TodoList = () => {
  const { todos, toggleComplete, deleteTodo } = useContext(TodosContext) || {
    todos: [],
    toggleComplete: () => {},
    deleteTodo: () => {},
  };

  // Memoize the filtered todos to avoid recalculating on every render
  const memoizedTodos = useMemo(() => todos, [todos]);

  // Memoize the toggleComplete function
  const handleToggleComplete = useCallback((id: number) => {
    toggleComplete(id);
  }, [toggleComplete]);

  // Memoize the deleteTodo function
  const handleDeleteTodo = useCallback((id: number) => {
    deleteTodo(id);
  }, [deleteTodo]);

  return (
    <div className='container'>
      <div className='d-flex text-white flex-column justify-content-center align-items-center'>
        <h1 className='mb-5'>Your Todo List</h1>
      </div>
      <Filter />
      <Table striped bordered hover responsive className='todo-table'>
        <thead>
          <tr>
            <th>Complete</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {memoizedTodos.map(todo => (
            <tr key={todo.id} className={todo.completed ? 'table-success' : ''}>
              <td className='d-flex justify-content-center p-3'>
                <CustomCheckbox 
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)} 
                />
              </td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td className='d-flex justify-content-center'>
                <button className="btn-53" onClick={() => handleDeleteTodo(todo.id)}>
                  <div className="original">DELETE</div>
                  <div className="letters">
                    <span>D</span>
                    <span>E</span>
                    <span>L</span>
                    <span>E</span>
                    <span>T</span>
                    <span>E</span>
                  </div>
                </button>    
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default React.memo(TodoList);
