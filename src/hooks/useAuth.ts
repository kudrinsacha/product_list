import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';

import { auth } from '@/firebase';
import { setUserIdAction } from '@/store';

const useAuth = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserIdAction(user?.uid ?? null));
  }, [user]);

  return user;
};

export default useAuth;
