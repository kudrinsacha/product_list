import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div>Oops !</div>
      <div className={styles.main}>
        Page not found, go to <Link to="/">home</Link>
      </div>
    </div>
  );
};

export default NotFound;
