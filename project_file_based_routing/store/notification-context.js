const { createContext, useState, useEffect } = require("react");

const NotificationContext = createContext({
  notification: null,
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

function NotificationContextProvider(props) {
  const [activeNotification, setAtiveNotification] = useState(null);

  useEffect(() => {
    if (activeNotification && activeNotification.status !== "pending") {
      const timer = setTimeout(() => {
        hideNotificationHandler();
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData) {
    setAtiveNotification({
      title: notificationData.title,
      message: notificationData.message,
      status: notificationData.status,
    });
  }
  function hideNotificationHandler() {
    setAtiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={context}>
      {props.children}{" "}
    </NotificationContext.Provider>
  );
}

export { NotificationContextProvider };
export default NotificationContext;
