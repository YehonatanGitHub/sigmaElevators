import { FaSignInAlt, FaSignOutAlt, FaUser, FaUserFriends } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>סיגמא מעליות</Link>
      </div>
      <ul>
        {user ? (
          <>
            <li className='btn-customers'>
              <Link to='/customers'>
                <FaUserFriends /> לקוחות
              </Link>
            </li>
            <li>
              <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> יציאה
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> כניסה
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> רישום
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
