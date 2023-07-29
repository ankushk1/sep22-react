import toast from "react-hot-toast";

export const successToast = (message) => {
  toast.success(message, {
    duration: 3000,
    position: "top-right",

    // Styling
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff"
    },

    // Custom Icon
    icon: "👏",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff"
    }
  });
};

export const errorToast = (message) => {
  toast.error(message, {
    duration: 3000,
    position: "top-right",

    // Styling
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff"
    },

    // Custom Icon
    icon: "❌",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff"
    }
  });
};
