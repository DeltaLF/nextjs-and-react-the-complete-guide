import { MongoClient } from "mongodb";

// Connection URL
const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

// Database Name
const dbName = process.env.MONGODB_DBNAME;

async function mongodbAction(collectionName, callback) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const resp = await callback(collection);
    client.close();
    return resp;
  } catch (error) {
    const message =
      typeof error.message === "string"
        ? error.message
        : "something went wrong";
    return { success: false, message };
  }
}

export { mongodbAction };
