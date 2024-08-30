import React, { useState } from 'react';
import styles from './styles/Contact.module.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setFormSubmitted(true);

  };

  return (
    <div className={styles.contactContainer}>
      <header className={styles.header}>
        <h1 className=' text-white mb-4'>Contact Us</h1>
      </header>

      {formSubmitted ? (
        <div className={styles.thankYouMessage}>
          <h2>Thank You!</h2>
          <p>Your message has been sent successfully. We will get back to you soon.</p>
        </div>
      ) : (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white mb-3">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white mb-3">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label text-white mb-3">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows={3}
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary text-white mb-3">Send</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
