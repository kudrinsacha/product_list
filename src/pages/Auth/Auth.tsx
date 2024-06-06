import { Outlet } from 'react-router-dom';

import { Header, ProductCreation, Loading, Error } from '@/components';
import { AUTH_PAGES_LIST, NOT_AUTH_PAGES_LIST } from '@/constans/Auth';

import styles from './Auth.module.scss';

type AuthProps = {
  auth: boolean;
};

const Auth = ({ auth }: AuthProps) => {
  return (
    <div className={styles.auth}>
      <Header pages={auth ? AUTH_PAGES_LIST : NOT_AUTH_PAGES_LIST} auth={auth} />
      <div className={styles.main}>
        <Outlet />
      </div>
      {auth && <ProductCreation />}
      <Loading />
      <Error />
    </div>
  );
};

export default Auth;
