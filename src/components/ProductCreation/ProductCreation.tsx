import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import { ProductForm, MyModal } from '@/components';
import { useAddProduct } from '@/hooks';
import { INITIAL_OPEN_MODAL } from '@/constans/ProductCreation';
import { ProductCardType } from '@/types/Products';

import styles from './ProductCreation.module.scss';

const ProductCreation = () => {
  const [openModal, setOpenModal] = useState(INITIAL_OPEN_MODAL);
  const addProduct = useAddProduct();

  const handleModalOpen = () => setOpenModal(true);

  const handleModalClose = () => setOpenModal(false);

  const submitForm = (product: ProductCardType) => {
    addProduct(product).then(() => handleModalClose());
  };

  return (
    <div className={styles.productCreation}>
      <Fab className={styles.addBtn} color="primary" onClick={handleModalOpen}>
        <AddIcon />
      </Fab>
      <MyModal openModal={openModal} handleModalClose={handleModalClose}>
        <ProductForm submitForm={submitForm} />
      </MyModal>
    </div>
  );
};

export default ProductCreation;
