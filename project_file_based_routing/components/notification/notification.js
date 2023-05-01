import { useContext } from "react";

import NotificationContext from "../../store/notification-context";
import styled from "styled-components";

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  return (
    <NotificationDiv status={status} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </NotificationDiv>
  );
}

export default Notification;

const NotificationDiv = styled.div`
  background-color: ${({ status }) => {
    console.log("status", status);
    if (status === "success") return "#10be58";
    if (status === "error") return "#e65035";
    if (status === "pending") return " #177cbe";
    return "#1b1b1b;";
  }};
  position: fixed;
  bottom: 0;
  left: 0;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0.5rem 10%;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.2);
  h2 {
    margin: 0;
    font-size: 1.25rem;
    color: white;
  }
`;
