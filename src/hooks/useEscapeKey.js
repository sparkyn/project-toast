import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Escape") {
        event.preventDefault();
        callback(event);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [callback]);
}

export default useEscapeKey;
