import React from 'react';
import { useFormik, FormikProvider, FormikProps } from 'formik';
import { Button, FormControl, FormGroup, FormLabel, Form } from 'react-bootstrap';
import * as Yup from 'yup';

export default function RegistrationForm() {
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
    agree: Yup.bool().oneOf([true], 'You must agree to the terms'),
  });

  // Initialize Formik with initial values, validation schema, and submit handler
  const formik: FormikProps<any> = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agree: false,
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission, e.g., send values to an API
      console.log(values);
    },
  });

  return (
    // Provide Formik context to the form
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        {/* Full Name Field */}
        <FormGroup className='mb-4'>
          <FormLabel className='text-white fw-bolder'>Full Name</FormLabel>
          <FormControl
            isInvalid={!!formik.errors.fullName && formik.touched.fullName === true}
            {...formik.getFieldProps('fullName')}
          />
          {/* Display validation error for Full Name */}
          {formik.errors.fullName && formik.touched.fullName === true && (
            <div className="text-danger">{formik.errors.fullName as string}</div>
          )}
        </FormGroup>

        {/* Email Field */}
        <FormGroup className='mb-4'>
          <FormLabel className='text-white fw-bolder'>Email</FormLabel>
          <FormControl
            type="email"
            isInvalid={!!formik.errors.email && formik.touched.email === true}
            {...formik.getFieldProps('email')}
          />
          {/* Display validation error for Email */}
          {formik.errors.email && formik.touched.email === true && (
            <div className="text-danger">{formik.errors.email as string}</div>
          )}
        </FormGroup>

        {/* Password Field */}
        <FormGroup className='mb-4'>
          <FormLabel className='text-white fw-bolder'>Password</FormLabel>
          <FormControl
            type="password"
            isInvalid={!!formik.errors.password && formik.touched.password === true}
            {...formik.getFieldProps('password')}
          />
          {/* Display validation error for Password */}
          {formik.errors.password && formik.touched.password === true && (
            <div className="text-danger">{formik.errors.password as string}</div>
          )}
        </FormGroup>

        {/* Confirm Password Field */}
        <FormGroup className='mb-4'>
          <FormLabel className='text-white fw-bolder'>Confirm Password</FormLabel>
          <FormControl
            type="password"
            isInvalid={!!formik.errors.confirmPassword && formik.touched.confirmPassword === true}
            {...formik.getFieldProps('confirmPassword')}
          />
          {/* Display validation error for Confirm Password */}
          {formik.errors.confirmPassword && formik.touched.confirmPassword === true && (
            <div className="text-danger">{formik.errors.confirmPassword as string}</div>
          )}
        </FormGroup>

        {/* Agree to Terms Checkbox */}
        <FormGroup className='mb-4'>
          <Form.Check
          className=' text-white'
            type="checkbox"
            id="agree"
            label="I agree to the Terms"
            {...formik.getFieldProps('agree')}
            isInvalid={!!formik.errors.agree && formik.touched.agree === true}
          />
          {/* Display validation error for Terms Agreement */}
          {formik.errors.agree && formik.touched.agree === true && (
            <div className="text-danger">{formik.errors.agree as string}</div>
          )}
        </FormGroup>

        {/* Submit Button */}
        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>
    </FormikProvider>
  );
}
