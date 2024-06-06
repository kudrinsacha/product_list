import { useState } from 'react';
import { Button } from '@mui/material';

import { MyModal, DeleteForm } from '@/components';
import { useDeleteProduct } from '@/hooks';
import { INITIAL_OPEN_MODAL } from '@/constans/ProductDelete';
import { ProductCardType } from '@/types/Products';

import styles from './ProductDelete.module.scss';

type ProductDeleteProps = {
  product: ProductCardType;
  isLocked: boolean;
};

const ProductDelete = ({ product, isLocked }: ProductDeleteProps) => {
  const [openModal, setOpenModal] = useState(INITIAL_OPEN_MODAL);
  const deleteProduct = useDeleteProduct();

  const handleModalOpen = () => setOpenModal(true);

  const handleModalClose = () => setOpenModal(false);

  const submitForm = () => {
    deleteProduct(product).then(() => handleModalClose());
  };

  return (
    <div className={styles.deleteBtn}>
      <Button variant="outlined" color="error" onClick={handleModalOpen} disabled={isLocked}>
        Delete
      </Button>
      <MyModal openModal={openModal} handleModalClose={handleModalClose}>
        <DeleteForm submitForm={submitForm} handleModalClose={handleModalClose} />
      </MyModal>
    </div>
  );
};

export default ProductDelete;
