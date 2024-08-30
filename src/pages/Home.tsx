import React from 'react';
import TodoForm from '../components/TodoForm';

export default function Home() {
  return (
    <div className='d-flex text-white flex-column justify-content-between align-items-center'>
      <h1 className='mb-5'>Home Page</h1>
      <TodoForm/>
    </div>
  );
}
