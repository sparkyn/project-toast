import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toastRack } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toastRack.map((item) => {
        return (
          <li className={styles.toastWrapper} key={item.id}>
            <Toast messageVariant={item.messageVariant} id={item.id}>
              {item.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
