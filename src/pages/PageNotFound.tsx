import React from 'react'
import { Container, Alert } from 'react-bootstrap';

export default function PageNotFound() {
  return (
    <Container className='text-center mt-5'>
    <Alert variant="danger">
      <Alert.Heading>404 Not Found</Alert.Heading>
      <p>
        The page you are looking for does not exist.
      </p>
    </Alert>
  </Container>
  )
}
