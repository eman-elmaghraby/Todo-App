import React, { useContext } from 'react';
import { TodosContext } from '../context/TodoContext';
import './styles/Filter.css'; 

export default function Filter() {
  const { filter, setFilter } = useContext(TodosContext) || {
    filter: 'all',
    setFilter: () => {},
  };

  return (
    <div className='filter-container mb-5 mt-4'>
      <div className='d-flex align-items-center justify-content-between'>
        <label htmlFor='filter' className='filter-label'>Filter Todos:</label>
        <select
          id='filter'
          className='form-select filter-select'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='incomplete'>Incomplete</option>
        </select>
      </div>
    </div>
  );
}
