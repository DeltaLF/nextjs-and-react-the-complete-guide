import { getMongoDb } from "@/db/db-utils";

const COLLECTION_NAME = "contact";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, message, name } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !message ||
      message.trim() === "" ||
      !name ||
      name.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    // store it in a database
    let collection = null;
    const newMessage = { name, email, message };

    try {
      const db = await getMongoDb();
      collection = db.collection(COLLECTION_NAME);
      if (!collection) throw new Error("No collection Found!");
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Fail to connect to mongodb" });
      return;
    }

    await collection.insertOne(newMessage);
    // const client = new MongoClient(process.env.MONGODB_URI);
    // runMongodb(async (collection) => {
    //   await collection.insertOne(newMessage);
    // });

    res.status(201).json({
      message: "Successfully stored message!",
      newMessage: newMessage,
    });
    return;
  } else {
    res.status(405).send();
  }
}

export default handler;
