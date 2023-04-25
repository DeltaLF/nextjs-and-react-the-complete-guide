import fs from "fs";
import { buildFeedbackPath, extractFeedback } from "@/utils/db_access";

function handler(req, res) {
  // execute server side(only) code
  const { method } = req;

  switch (method) {
    case "POST": {
      const { email, feedback } = req.body;
      const newFeedback = { id: new Date().toISOString(), email, feedback };
      //store the data
      const pathToDB = buildFeedbackPath();
      const data = extractFeedback(pathToDB);
      data.push(newFeedback);
      fs.writeFileSync(pathToDB, JSON.stringify(data));
      res.status(201).json({ message: "Success!", feedback: newFeedback });
      break;
    }
    case "GET": {
      const data = extractFeedback(buildFeedbackPath());
      res.status(200).json({
        message: "It works!",
        feedback: data,
      });
    }
    default: {
      res.status(404);
    }
  }
}

export default handler;
