import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';


export default function TodoPage() {

  return (
    <div className='d-flex text-white flex-column justify-content-between align-items-center'>
      <h1 className='mb-5'>Todo Page</h1>
      <TodoForm/>
      <TodoList   />
    </div>
  );
}
