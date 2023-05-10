import { verifyPassword } from "@/lib/auth";
import { conntectToDatabase } from "@/lib/db";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: { jwt: true },
  jwt: {
    maxAge: 60 * 60,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await conntectToDatabase();
        const collection = client
          .db(process.env.MONGODB_DBNAME)
          .collection("users");
        const user = await collection.findOne({ email: credentials.email });
        if (!user) {
          client.close();
          throw new Error("No user found!");
        }
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
          client.close();
          throw new Error("Invalid password");
        }
        client.close();

        // auth successed => return object will become json webtoken
        return {
          email: user.email,
        };
      },
    }),
  ],
};
export default NextAuth(authOptions);
export { authOptions };
