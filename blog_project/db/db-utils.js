const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_DBNAME;

if (!uri || !dbName) throw new Error("Missing MONGODB_URL or MONGODB_DBNAME");

// Create a new MongoClient
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// export async function runMongodb(callback, collectionName) {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);
//     await callback(collection);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

export async function getMongoClient() {
  if (!global.mongoClientPromise) {
    const client = new MongoClient(uri);
    // client.connect() returns an instance of MongoClient when resolved
    global.mongoClientPromise = client.connect();
  }
  return global.mongoClientPromise;
}

export async function getMongoDb() {
  const mongoClient = await getMongoClient();
  return mongoClient.db(dbName);
}
