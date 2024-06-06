import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

import { clearAuthError, clearProductError, selectAuthError, selectProductsError } from '@/store';
import { INITIAL_SHOW_ERROR } from '@/constans/Error';

import styles from './Error.module.scss';

const Error = () => {
  const authError = useSelector(selectAuthError);
  const productError = useSelector(selectProductsError);
  const dispatch = useDispatch();
  const errTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [showError, setShowError] = useState(INITIAL_SHOW_ERROR);

  const handleShowError = () => {
    setShowError(INITIAL_SHOW_ERROR);
    errTimerRef.current = setTimeout(() => {
      dispatch(clearAuthError());
      dispatch(clearProductError());
    }, 150);
  };

  useEffect(() => {
    if (authError || productError) setShowError(true);

    return () => {
      if (errTimerRef.current) {
        clearTimeout(errTimerRef.current);
      }
    };
  }, [authError, productError]);

  return (
    <div className={showError ? `${styles.error} ${styles.active}` : styles.error}>
      <button className={styles.closeBtn} type="button" onClick={handleShowError}>
        <CloseIcon />
      </button>
      <div className={styles.errorText}>{authError ?? productError}</div>
    </div>
  );
};

export default Error;
