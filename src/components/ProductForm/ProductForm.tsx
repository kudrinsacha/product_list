import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { MyUploadInput, MyNumberInput, MyTextField, MyButton } from '@/components';
import { INITIAL_TITLE, INITIAL_DESCRIPTION, INITIAL_PRICE } from '@/constans/ProductCreation';
import { ProductCardType } from '@/types/Products';
import { selectPlug } from '@/store';

import styles from './ProductForm.module.scss';

type ProductFormProps = {
  submitForm: (product: ProductCardType) => void;
  product?: ProductCardType;
};

const ProductForm = ({ submitForm, product }: ProductFormProps) => {
  const INITIAL_IMAGE = useSelector(selectPlug);
  const [title, setTitle] = useState(product?.title ?? INITIAL_TITLE);
  const [description, setDescription] = useState(product?.description ?? INITIAL_DESCRIPTION);
  const [price, setPrice] = useState(product?.price ?? INITIAL_PRICE);
  const [image, setImage] = useState(product?.image ?? INITIAL_IMAGE);

  const handleTitle = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setTitle(e.target.value), []);

  const handleDescription = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDescription(e.target.value),
    []
  );

  const handlePrice = useCallback(
    (_: React.FocusEvent<HTMLInputElement> | React.PointerEvent | React.KeyboardEvent, value: number | null) => {
      if (value) {
        setPrice(value);
      } else {
        setPrice(INITIAL_PRICE);
      }
    },
    []
  );

  const handleImgUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    if (file && file.length > 0) setImage({ ...image, url: file[0] });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm({ title, description, price, image, id: product?.id ?? '', userId: product?.userId ?? '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formImg}>
        <img
          className={styles.uploadImg}
          src={typeof image.url === 'string' ? image.url : URL.createObjectURL(image.url)}
          alt="upload-img"
        />
        <MyUploadInput accept="image/png, image/jpeg" onChange={handleImgUpload} />
      </div>
      <div className={styles.formControl}>
        <MyTextField label="Title" variant="standard" required value={title} onChange={handleTitle} />
        <MyTextField label="Description" variant="standard" multiline value={description} onChange={handleDescription} />
        <MyNumberInput required value={price} onChange={handlePrice} />
        <MyButton type="submit" variant="outlined">
          {product ? 'Edit' : 'Create'}
        </MyButton>
      </div>
    </form>
  );
};

export default ProductForm;
