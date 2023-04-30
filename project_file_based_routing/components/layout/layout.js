import MainHeader from "./main-header";
import Notification from "../notification/notification";
import { useContext } from "react";
import NotificationContext from "@/store/notification-context";

function Layout(props) {
  const notificationContext = useContext(NotificationContext);
  const activeNotification = notificationContext.notification;
  return (
    <>
      <MainHeader></MainHeader>
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
}

export default Layout;
