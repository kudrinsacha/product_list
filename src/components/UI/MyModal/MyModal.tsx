import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

import styles from './MyModal.module.scss';

type MyProductModalProps = {
  openModal: boolean;
  handleModalClose: () => void;
  children: JSX.Element;
};

const MyModal = ({ openModal, handleModalClose, children }: MyProductModalProps) => {
  return (
    <Modal open={openModal} onClose={handleModalClose}>
      <div className={styles.modal}>
        <button type="button" className={styles.btnClose} onClick={handleModalClose}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default MyModal;
