import { ProductCard } from '@/components';
import { useGetProducts } from '@/hooks';

import styles from './AllProductsList.module.scss';

const AllProductsList = () => {
  const products = useGetProducts();
  return (
    <div className={styles.productList}>
      <div className={`${styles.productListItems} dataLayer`}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsList;
