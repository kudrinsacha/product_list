import { useCallback, useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { MyTextField, MyButton } from '@/components';
import { INITIAL_LOGIN, INITIAL_PASSWORD, INITIAL_SHOW_PASSWORD } from '@/constans/Auth';

import styles from './AuthForm.module.scss';

type AuthFormProps = {
  submitForm: (email: string, password: string) => void;
  type: 'register' | 'login';
};

const AuthForm = ({ submitForm, type }: AuthFormProps) => {
  const [login, setLogin] = useState(INITIAL_LOGIN);
  const [password, setPassword] = useState(INITIAL_PASSWORD);
  const [showPassword, setShowPassword] = useState(INITIAL_SHOW_PASSWORD);

  const handleLogin = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value), []);

  const handlePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value), []);

  const handleShowPassword = useCallback(() => setShowPassword((show) => !show), []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm(login, password);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <MyTextField variant="outlined" label="email" value={login} onChange={handleLogin} />
      <MyTextField
        variant="outlined"
        label="password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePassword}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff color="primary" /> : <Visibility color="primary" />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <MyButton type="submit" variant="outlined" onClick={() => window.ym(97505222, 'reachGoal', 'btn-click')}>
        {type === 'login' ? 'Sign in' : 'Sign Up'}
      </MyButton>
    </form>
  );
};

export default AuthForm;
