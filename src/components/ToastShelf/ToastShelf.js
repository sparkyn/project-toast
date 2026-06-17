import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastRack, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toastRack.map((item) => {
        return (
          <li className={styles.toastWrapper} key={item.id}>
            <Toast
              messageVariant={item.messageVariant}
              handleDismiss={handleDismiss}
              id={item.id}
            >
              {item.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
