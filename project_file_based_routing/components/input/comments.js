import { useState, useEffect } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments(props) {
  const { eventId } = props;
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    if (!showComments) return;
    fetch(`/api/comment/${eventId}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments);
      });
  }, [refetch, showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // send data to API
    fetch(`/api/comment/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRefetch(!refetch);
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
