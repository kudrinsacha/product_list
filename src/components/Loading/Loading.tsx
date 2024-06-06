import { useSelector } from 'react-redux';
import LoopIcon from '@mui/icons-material/Loop';

import { selectAuthLoading, selectProductsLoading } from '@/store';

import styles from './Loading.module.scss';

type LoadingProps = {
  load?: boolean;
};

const Loading = ({ load }: LoadingProps) => {
  const isAuthLoading = useSelector(selectAuthLoading);
  const isProductsLoading = useSelector(selectProductsLoading);

  return (
    <div className={isAuthLoading || isProductsLoading || load ? `${styles.loading} ${styles.active}` : styles.loading}>
      <LoopIcon className={styles.loadingIcon} />
    </div>
  );
};

export default Loading;
