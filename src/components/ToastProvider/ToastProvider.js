import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  React.useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Escape") {
        event.preventDefault();
        const nextToastRack = [];
        setToastRack(nextToastRack);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

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
