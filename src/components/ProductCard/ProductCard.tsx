import { useSelector } from 'react-redux';

import { Description, ProductEdit, ProductDelete } from '@/components';
import { selectUserId } from '@/store';
import { ProductCardType } from '@/types/Products';

import styles from './ProductCard.module.scss';

type ProductCardProps = {
  product: ProductCardType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const currentUserId = useSelector(selectUserId);
  const isLockedControl = currentUserId !== product.userId;

  return (
    <div className={styles.productCard}>
      <div className={styles.productImgContainer}>
        <img className={styles.productImg} src={typeof product.image.url === 'string' ? product.image.url : ''} alt="product-img" />
      </div>
      <div className={styles.productBody}>
        <div className={styles.productInfo}>
          <div className={styles.productTitle}>{product.title}</div>
          <Description text={product.description} />
        </div>
        <div className={styles.productBtns}>
          <ProductEdit product={product} isLocked={isLockedControl} />
          <ProductDelete product={product} isLocked={isLockedControl} />
        </div>
      </div>
      <div className={styles.productPrice}>{product.price} $</div>
    </div>
  );
};

export default ProductCard;
