import { Button } from '@mui/material';

import styles from './DeleteForm.module.scss';

type DeleteFormProps = {
  submitForm: () => void;
  handleModalClose?: () => void;
};

const MyDeleteForm = ({ submitForm, handleModalClose }: DeleteFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <form className={styles.deleteForm} onSubmit={handleSubmit}>
      <div className={styles.deleteTitle}>Delete product ?</div>
      <div className={styles.deleteBtns}>
        <Button variant="outlined" onClick={handleModalClose}>
          Cancel
        </Button>
        <Button type="submit" variant="outlined" color="error">
          Delete
        </Button>
      </div>
    </form>
  );
};

export default MyDeleteForm;
