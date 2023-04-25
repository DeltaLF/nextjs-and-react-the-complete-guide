import { buildFeedbackPath, extractFeedback } from "@/utils/db_access";
import FeedbackList from "@/components/feedback/feedback_list";

function FeedbackPage({ feedbackItems }) {
  return <FeedbackList feedbackItems={feedbackItems} />;
}

export async function getStaticProps() {
  const data = extractFeedback(buildFeedbackPath());
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
