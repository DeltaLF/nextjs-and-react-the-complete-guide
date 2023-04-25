import fs from "fs";
import path from "path";

export function buildFeedbackPath() {
  const filepath = path.join(process.cwd(), "data", "feedback.json");
  return filepath;
}
export function extractFeedback(path) {
  const fileData = fs.readFileSync(path);
  return JSON.parse(fileData);
}
