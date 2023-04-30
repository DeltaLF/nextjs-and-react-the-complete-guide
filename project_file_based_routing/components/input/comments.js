import { useState, useEffect, useContext } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "@/store/notification-context";

function Comments(props) {
  const notificationContext = useContext(NotificationContext);
  const { eventId } = props;
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!showComments) return;
    setIsLoading(true);
    fetch(`/api/comment/${eventId}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [refetch, showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // send data to API
    notificationContext.showNotification({
      title: "Adding a new comment",
      status: "pending",
      message: "Creating a new comment...",
    });
    fetch(`/api/comment/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.message || "Something went wrong!");
          });
        }
      })
      .then((data) => {
        notificationContext.showNotification({
          title: "Success!",
          status: "success",
          message: "Successfully create a comment!",
        });
        setRefetch(!refetch);
      })
      .catch((err) => {
        notificationContext.showNotification({
          title: "Fail!",
          status: "error",
          message: err.message || "Fail to create a comment",
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} isLoading={isLoading} />}
    </section>
  );
}

export default Comments;
