import { useState } from 'react';
import { DEFAULT_MAX_LENGTH, INITIAL_IS_SHOW } from '@/constans/Description';

import styles from './Description.module.scss';

type DescriptionProps = {
  text: string;
  maxLength?: number;
};

const Description = ({ text, maxLength = DEFAULT_MAX_LENGTH }: DescriptionProps) => {
  const [isShow, setIsShow] = useState(INITIAL_IS_SHOW);

  const handleShow = () => setIsShow(!isShow);

  return (
    <div className={styles.description}>
      {text.length > maxLength ? (
        <>
          <div className={styles.descriptionText}>{isShow ? text : `${text.slice(0, maxLength)}...`}</div>
          <button type="button" className={styles.btn} onClick={handleShow}>
            {isShow ? 'Hide Details' : 'Show Details'}
          </button>
        </>
      ) : (
        <div className={styles.descriptionText}>{text}</div>
      )}
    </div>
  );
};

export default Description;
