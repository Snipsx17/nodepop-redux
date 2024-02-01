import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { authLogin } from '../../../../store/actions';
import { initState } from '../../../../store/reducers';
import LoginPage from '../LoginPage';
import userEvent from '@testing-library/user-event';

jest.mock('../../../../store/actions');

describe('LoginPage', () => {
  const store = {
    getState: () => initState,
    dispatch: () => {},
    subscribe: () => {},
  };

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

  //Create snapshot
  test('snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  test('should call authLogin', async () => {
    const email = 'email@email.com';
    const password = '1234';

    renderComponent();

    const inputEmail = screen.getByLabelText(/email/);
    const inputPassword = screen.getByLabelText(/password/);
    const submitButton = screen.getByRole('button');

    expect(submitButton).toBeDisabled();
    await userEvent.type(inputEmail, email);
    await userEvent.type(inputPassword, password);
    await userEvent.click(submitButton);

    fireEvent.click(submitButton);
    expect(authLogin).toHaveBeenCalledWith({
      email,
      password,
      remember: false,
    });
  });
});
