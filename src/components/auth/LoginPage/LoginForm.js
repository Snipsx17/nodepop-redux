import T from 'prop-types';
import { Form, FormConsumer, Input } from '../../form';

const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;

function LoginForm({ onSubmit, isLoading }) {
  return (
    <Form
      onSubmit={onSubmit}
      initialValue={{
        email: '',
        password: '',
        remember: false,
      }}
    >
      <label>
        email: <Input name="email" />
      </label>
      <label>
        password:
        <Input type="password" name="password" />
      </label>
      <Input type="checkbox" name="remember" />
      <FormConsumer>
        {({ validate }) => (
          <button
            disabled={!validate(validEmail, validPassword, () => !isLoading)}
          >
            Login
          </button>
        )}
      </FormConsumer>
    </Form>
  );
}

LoginForm.propTypes = {
  isLoading: T.bool,
  onSubmit: T.func.isRequired,
};

export default LoginForm;
