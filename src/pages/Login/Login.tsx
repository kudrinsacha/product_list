import { Link } from 'react-router-dom';

import { AuthForm } from '@/components';
import { useLogin } from '@/hooks';

import styles from './Login.module.scss';

const Login = () => {
  const login = useLogin();

  const submitForm = (email: string, password: string) => {
    login(email, password);
  };

  return (
    <div className={styles.login}>
      <AuthForm submitForm={submitForm} type="login" />
      <div className={styles.redirect}>
        Not registered ? Go to <Link to="/register">registration page</Link>
      </div>
    </div>
  );
};

export default Login;
