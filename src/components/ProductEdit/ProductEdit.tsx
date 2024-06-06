import { useState } from 'react';
import { Button } from '@mui/material';

import { MyModal, ProductForm } from '@/components';
import { useUpdateProduct } from '@/hooks';
import { INITIAL_OPEN_MODAL } from '@/constans/ProductEdit';
import { ProductCardType } from '@/types/Products';

import styles from './ProductEdit.module.scss';

type ProductEditProps = {
  product: ProductCardType;
  isLocked: boolean;
};

const ProductEdit = ({ product, isLocked }: ProductEditProps) => {
  const [openModal, setOpenModal] = useState(INITIAL_OPEN_MODAL);
  const updateProduct = useUpdateProduct();

  const handleModalOpen = () => setOpenModal(true);

  const handleModalClose = () => setOpenModal(false);

  const submitForm = (editedProduct: ProductCardType) => {
    updateProduct(editedProduct).then(() => handleModalClose());
  };

  return (
    <div className={styles.productEdit}>
      <Button variant="outlined" onClick={handleModalOpen} disabled={isLocked}>
        Edit
      </Button>
      <MyModal openModal={openModal} handleModalClose={handleModalClose}>
        <ProductForm submitForm={submitForm} product={product} />
      </MyModal>
    </div>
  );
};

export default ProductEdit;
