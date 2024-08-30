import React, { useContext } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import { TodosContext } from '../context/TodoContext';
import './styles/UserList.css';

// Define TypeScript interfaces for user and todo data
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Todo {
  id: number; 
  title: string;
  description: string;
  completed: boolean;
}

// Define a type for combined data
type CombinedData = 
  | { type: 'user'; data: User }
  | { type: 'todo'; data: Todo };

export default function UserList() {
  // Fetch user data from the API using custom hook
  const { data: users, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');
  
  // Access todos from the TodosContext
  const { todos } = useContext(TodosContext) || { todos: [] as Todo[] }; 

  // Display loading state while fetching data
  if (loading) return <div className="loading">Loading...</div>;

  // Display error state if fetching fails
  if (error) return <div className="error">Error loading users: {error}</div>;

  // Combine user data and todo data
  const combinedData: CombinedData[] = [
    ...(users ? users.map(user => ({ type: 'user', data: user } as const)) : []),
    ...todos.map(todo => ({ type: 'todo', data: todo } as const))
  ];

  return (
    <Container className="user-list-container">
      <Row className="justify-content-center text-center mb-5">
        <Col>
          <h1 className="title">Users List with Todos</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover responsive className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Todo Title</th>
                <th>Todo Description</th>
                <th>Todo Completed</th>
              </tr>
            </thead>
            <tbody>
              {combinedData.length > 0 ? (
                combinedData.map((item, index) => (
                  <tr key={index} className={item.type === 'user' ? 'user-row' : 'todo-row'}>
                    {item.type === 'user' ? (
                      <>
                        <td>{item.data.name}</td>
                        <td>{item.data.email}</td>
                        <td>{item.data.username}</td>
                        <td colSpan={3}>—</td>
                      </>
                    ) : (
                      <>
                        <td colSpan={3}>—</td>
                        <td>{item.data.title}</td>
                        <td>{item.data.description}</td>
                        <td>{item.data.completed ? 'Yes' : 'No'}</td>
                      </>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>No data available</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
