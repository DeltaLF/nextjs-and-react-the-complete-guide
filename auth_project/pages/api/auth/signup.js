import { hashPassword } from "@/lib/auth";
import { conntectToDatabase } from "@/lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 4
    ) {
      return res.status(422).json({
        message:
          "Invalid input: wrong email format or password should be at least 4 characters long.",
      });
    }
    const hashedPassword = await hashPassword(password);
    const client = await conntectToDatabase();
    const db = client.db(process.env.MONGODB_DBNAME);
    const collection = db.collection("users");
    // check the email isn't duplciated
    const findEmailResult = await collection.findOne({ email: email });
    if (findEmailResult) {
      res.status(403).json({ message: "The email is alreadly used!" });
      return;
    }
    const result = await collection.insertOne({
      email: email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User created successfully!" });
  }
}

export default handler;
