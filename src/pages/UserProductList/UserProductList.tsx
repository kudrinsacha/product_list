import { useSelector } from 'react-redux';

import { ProductCard } from '@/components';
import { selectProducts, selectUserId } from '@/store';

import styles from './UserProductList.module.scss';

const UserProductList = () => {
  const products = useSelector(selectProducts);
  const currentUserId = useSelector(selectUserId);

  return (
    <div className={styles.productList}>
      <div className={styles.productListItems}>
        {products.map((product) => {
          if (product.userId === currentUserId) return <ProductCard product={product} key={product.id} />;
          return <div key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default UserProductList;
