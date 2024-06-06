import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppDispatch, loginUserThunk } from '@/store';

const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    const data = await dispatch(loginUserThunk({ email, password }));
    if (data.type !== 'auth/login/rejected') {
      navigate('/');
    }
  };

  return login;
};

export default useLogin;
