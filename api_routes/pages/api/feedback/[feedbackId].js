import { buildFeedbackPath, extractFeedback } from "@/utils/db_access";

function handler(req, res) {
  const method = req.method;
  switch (method) {
    case "GET": {
      const feebackId = req.query.feedbackId;
      const data = extractFeedback(buildFeedbackPath());
      const oneFeedback = data.find((feedback) => feebackId === feedback.id);
      res.status(200).json({
        feedback: oneFeedback,
      });
    }
    default:
      res.status(404);
  }
}

export default handler;
