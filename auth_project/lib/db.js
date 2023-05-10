import { MongoClient } from "mongodb";

function conntectToDatabase() {
  const client = MongoClient.connect(process.env.MONGODB_URL, {});
  return client;
}

export { conntectToDatabase };
