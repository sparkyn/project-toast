import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  // define action if user presses escape key
  const handleEscape = React.useCallback(() => {
    setToastRack([]);
  }, []);

  useEscapeKey(handleEscape);

  const [toastRack, setToastRack] = React.useState([]);

  const createToast = (message, messageVariant) => {
    const nextToastRack = [
      ...toastRack,
      {
        message,
        messageVariant,
        id: crypto.randomUUID(),
      },
    ];
    setToastRack(nextToastRack);
  };

  const dismissToast = (id) => {
    const nextToastRack = toastRack.filter((toast) => {
      return toast.id !== id;
    });
    setToastRack(nextToastRack);
  };

  return (
    <ToastContext.Provider value={{ toastRack, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
