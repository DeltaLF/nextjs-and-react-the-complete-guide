import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const NotificationContext = createContext({
  title: "",
  message: "",
  status: "",
  setNotification: () => {},
  clearNotification: () => {},
});

function NotificationProvider({ children }) {
  const [notification, setNotificationState] = useState({
    title: "",
    message: "",
    status: "",
  });
  const setNotification = ({ title, message, status }) => {
    setNotificationState({
      title,
      message,
      status,
    });
  };

  const clearNotification = () => {
    setNotificationState({
      title: "",
      message: "",
      status: "",
    });
  };

  const value = {
    notification,
    setNotification,
    clearNotification,
  };

  useEffect(() => {
    if (notification.message && notification.status !== "pending") {
      const timer = setTimeout(() => {
        clearNotification();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export { NotificationProvider };
export default NotificationContext;
