import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppDispatch, registerUserThunk } from '@/store';

const useRegister = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const register = async (email: string, password: string) => {
    const data = await dispatch(registerUserThunk({ email, password }));

    if (data.type !== 'auth/register/rejected') {
      navigate('/');
    }
  };

  return register;
};

export default useRegister;
