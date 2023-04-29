import { MongoClient } from "mongodb";

async function connectDatabase() {
  const client = new MongoClient(process.env.MONGODB_URL);
  await client.connect();
  return client;
}

async function mongodbAction(collectionName, callback) {
  let db;
  let client;
  let collection;
  // connection
  try {
    client = await connectDatabase();
    db = client.db(process.env.MONGODB_DBNAME);
    console.log(collectionName);
    collection = db.collection(collectionName);
  } catch (error) {
    console.log(error);
    return {
      success: false,
      status: 500,
      message: "Fail to connect to db!",
      detail: error.message,
    };
  }
  // operation
  try {
    const resp = await callback(collection);
    // client.close();
    return resp;
  } catch (error) {
    console.log(error);

    return {
      success: false,
      status: 500,
      message: "Fail to operate db!",
      detail: error.message,
    };
  }
}

export { mongodbAction };
