import { useDispatch } from 'react-redux';

import { AppDispatch, logoutUserThunk } from '@/store';

const useLogout = () => {
  const dispatch = useDispatch<AppDispatch>();

  const logout = async () => {
    dispatch(logoutUserThunk());
  };

  return logout;
};

export default useLogout;
