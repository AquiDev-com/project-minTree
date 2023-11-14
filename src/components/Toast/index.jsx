import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showSuccessToast = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    draggable: true,
  });
};
const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    draggable: true,
  });
};

export { showErrorToast, showSuccessToast };
