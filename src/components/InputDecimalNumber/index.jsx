import { useState, useRef } from 'react';

import styles from './styles/input.module.scss';

export const InputDecimalNumber = () => {

  const [value, setValue] = useState('');

  const inputRef = useRef();

  const handleChangeValue = (event) => {
    let data = event.target.value;

    if (data.split('.')[1] === undefined) {
      data += '.00'
    }

    if ((data.split('.')[1] || '').length < 3 && /^[0-9]*[.,]?[0-9]{0,2}$/.test(data)) {
      setValue(data);
    }

    if (data.split('.')[1] === '00' || '') {
      setTimeout(() => {
        inputRef.current.setSelectionRange(data.length - 3, data.length - 3)
      }, 0);
    }
  };

  return (
    <>
      <input
        className={styles.input}
        value={value}
        onChange={handleChangeValue}
        ref={inputRef}
        type='tel'
        min="0"
      />
    </>
  );
}