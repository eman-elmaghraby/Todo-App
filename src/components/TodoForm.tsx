import { useFormik } from 'formik';
import React, { useContext } from 'react';
import * as Yup from 'yup';
import './styles/TodoForm.css';
import { FormGroup } from 'react-bootstrap';
import { TodosContext } from '../context/TodoContext';
import { useNavigate } from 'react-router-dom';

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  title: Yup.string().required('Please provide a title for your todo.'),
  description: Yup.string().required('A description is required for the todo. Please enter one.'),
});

export default function TodoForm() {
  // Access TodosContext to get the addTodo function
  const todosContext = useContext(TodosContext);
  const navigate = useNavigate();

  // Ensure the component is used within a TodosProvider
  if (!todosContext) {
    throw new Error('TodoForm must be used within a TodosProvider');
  }

  const { addTodo } = todosContext;

  // Initialize Formik with initial values, validation schema, and submit handler
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Create a new todo item with current date as ID
      const newTodo = {
        id: Date.now(),
        title: values.title,
        description: values.description,
        completed: false,
      };
      // Add the new todo to context
      addTodo(newTodo);
      // Reset the form fields
      resetForm();
      // Navigate to the todos list page
      navigate('/todos-list'); 
    },
  });

  return (
    // Container for the form with styling
    <div className='d-flex text-white flex-column justify-content-between align-items-center'>
      <form onSubmit={formik.handleSubmit} className='d-flex flex-column align-items-stretch'>
        {/* Title input field */}
        <FormGroup>
          <input
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Title"
            className="input mb-3"
            name="title"
            type="text"
          />
          {/* Display validation error for title */}
          {formik.touched.title && formik.errors.title ? (
            <div className="text-danger mb-3">{formik.errors.title}</div>
          ) : null}
        </FormGroup>

        {/* Description input field */}
        <FormGroup>
          <input
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Description"
            className="input mb-3"
            name="description"
            type="text"
          />
          {/* Display validation error for description */}
          {formik.touched.description && formik.errors.description ? (
            <div className="text-danger mb-3">{formik.errors.description}</div>
          ) : null}
        </FormGroup>

        {/* Submit button */}
        <button type="submit" disabled={!formik.isValid} className="btn">
          Add Todo
        </button>
      </form>
    </div>
  );
}
