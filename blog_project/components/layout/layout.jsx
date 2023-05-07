import MainNavigation from "./main-navigation";
import Notification from "@/components/ui/notification";
import NotificationContext from "@/store/notificationContext";
import { useContext } from "react";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const { notification } = notificationCtx;
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <Notification
        status={notification.status}
        message={notification.message}
        title={notification.title}
      />
    </>
  );
}

export default Layout;
