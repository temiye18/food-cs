import { useEffect } from "react";

function useBlockPointerEvents(isOpen: boolean) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup to ensure class is removed
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  return null;
}

export default useBlockPointerEvents;
