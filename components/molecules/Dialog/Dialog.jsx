'use client';
import { useSearchParams } from 'next/navigation';
import { useRef, useEffect } from 'react';
import React from 'react';
import styles from './Dialog.module.scss';

const Dialog = (title, onClose, onOk, children) => {
  const searchParams = useSearchParams();
  const dialogRef = (useRef < null) | (HTMLDialogElement > null);
  const showDialog = searchParams.get('showDialog');

  useEffect(() => {
    if (showDialog === 'y') {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    onClose();
  };

  const clickOk = () => {
    onOk();
    closeDialog();
  };

  const dialog =
    showDialog === 'y' ? (
      <dialog ref={dialogRef} className={styles.modalWrapper}>
        <div>
          <div>
            <h1>{title}</h1>
            <button onClick={closeDialog}>x</button>
          </div>
          <div>
            {children}
            <div>
              <button onClick={clickOk}>ok</button>
            </div>
          </div>
        </div>
      </dialog>
    ) : null;
};

export default Dialog;
