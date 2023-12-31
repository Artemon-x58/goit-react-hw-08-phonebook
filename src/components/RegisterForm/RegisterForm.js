import { useDispatch } from 'react-redux';
import { Form, LinkContainer, Title } from './RegisterFormStyled';
import { register } from 'redux/auth/authOperations';
import { FormContainer } from './RegisterFormStyled';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer>
      <Title>Welcome to Your Phonebook</Title>
      <Form onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
      <LinkContainer>
        <p>Already have an account?</p>
        <Link to="/login">Log In</Link>
      </LinkContainer>
    </FormContainer>
  );
};
