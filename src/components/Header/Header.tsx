import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { MyButton } from '@/components';
import { useLogout } from '@/hooks';

import styles from './Header.module.scss';

type HeaderProps = {
  pages: { link: string; name: string }[];
  auth: boolean;
};

const Header = ({ pages, auth }: HeaderProps) => {
  const logout = useLogout();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => logout().then(() => navigate('/')), []);

  return (
    <div className={styles.header}>
      <div className={styles.pages}>
        {pages.map((page) => (
          <Link to={page.link} key={page.name}>
            {page.name}
          </Link>
        ))}
      </div>
      <div className={styles.auth}>
        {auth ? (
          <MyButton onClick={handleLogout}>Sign out</MyButton>
        ) : (
          <>
            <Link to="/login">Sign in</Link> / <Link to="/register">Sign up</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
