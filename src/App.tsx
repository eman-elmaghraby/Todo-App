import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import { TodosProvider } from './context/TodoContext';

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));
const RegistrationForm = React.lazy(() => import('./components/RegistrationForm'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));
const About = React.lazy(() => import('./pages/About'));
const TodosPage = React.lazy(() => import('./components/TodosPage'));
const TodoList = React.lazy(() => import('./components/TodoList'));
const UserList = React.lazy(() => import('./components/UserList'));

const routers = createBrowserRouter([
  { 
    path: '', 
    element: <Layout />, 
    children: [
      { path: '/', element: <Home /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about', element: <About /> },
      { path: '/todos', element: <TodosPage /> },
      { path: '/todos-list', element: <TodoList /> },
      { path: '/register', element: <RegistrationForm /> },
      { path: '/user-list', element: <UserList /> },
    ]
  },
  { path: "*", element: <PageNotFound /> }
]);

function App() {
  return (
    <TodosProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={routers} />
      </Suspense>
    </TodosProvider>
  );
}

export default App;
