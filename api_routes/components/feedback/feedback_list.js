import { useState } from "react";
function FeedbackList({ feedbackItems }) {
  const [feedbackData, setFeedbackData] = useState();
  function loadFeedbackHandler(id) {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }
  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {" "}
        {feedbackItems.map((item) => {
          return (
            <li key={item.id}>
              {item.feedback}{" "}
              <button onClick={loadFeedbackHandler.bind(null, item.id)}>
                Show Details
              </button>{" "}
            </li>
          );
        })}{" "}
      </ul>
    </>
  );
}

export default FeedbackList;
