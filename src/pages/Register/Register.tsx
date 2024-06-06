import { Link } from 'react-router-dom';

import { AuthForm } from '@/components';
import { useRegister } from '@/hooks';

import styles from './Register.module.scss';

const Register = () => {
  const register = useRegister();

  const submitForm = (email: string, password: string) => {
    register(email, password);
  };

  return (
    <div className={styles.register}>
      <AuthForm submitForm={submitForm} type="register" />
      <div className={styles.redirect}>
        Already registered ? Go to <Link to="/login">login page</Link>
      </div>
    </div>
  );
};

export default Register;
