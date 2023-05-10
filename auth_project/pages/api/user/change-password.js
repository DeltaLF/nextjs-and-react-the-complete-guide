import { verifyPassword, hashPassword } from "@/lib/auth";
import { conntectToDatabase } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }
  // is user auth?
  // remember to define NEXTAUTH_SECRET for jwt token
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: "Unauthenticated" });
  }
  const { email } = session.user;
  const { oldPassword, newPassword } = req.body;
  const client = await conntectToDatabase();
  const collection = await client
    .db(process.env.MONGODB_DBNAME)
    .collection("users");
  const userFromDB = await collection.findOne({ email });
  if (!userFromDB) {
    client.close();
    return res.status(401).json({ message: "Unauthenticated" });
  }

  const isValidPassword = await verifyPassword(
    oldPassword,
    userFromDB.password
  );
  if (!isValidPassword) {
    client.close();
    return res.status(403).json({ message: "Unauthorized, Invalid password" });
  }

  const hashedNewPassword = await hashPassword(newPassword);
  const result = await collection.updateOne(
    { email },
    { $set: { password: hashedNewPassword } }
  );
  client.close();

  console.log(result);
  return res.status(200).json({ message: "Password changed successfully" });
}

export default handler;
