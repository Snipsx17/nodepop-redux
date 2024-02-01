import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ConfirmationButton } from '../../common';
import { getIsLogged } from '../../../store/selectors';
import { authLogout } from '../../../store/actions';

const AuthButton = () => {
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();

  const handleLogoutConfirm = () => {
    dispatch(authLogout());
  };

  return isLogged ? (
    <ConfirmationButton
      confirmation="Are you sure?"
      onConfirm={handleLogoutConfirm}
    >
      Logout
    </ConfirmationButton>
  ) : (
    <Link to="/login">Login</Link>
  );
};

export default AuthButton;
