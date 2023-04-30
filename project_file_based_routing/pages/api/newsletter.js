import { mongodbAction } from "@/db/db-utils";

const DB_COLLECTIONS_NAME = "newsLetter";

async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST": {
      const { email } = req.body; //JSON.parse(req.body);
      if (!email || !email.includes("@")) {
        res.status(422).json("invalid email address");
        return;
      }
      const resp = await mongodbAction(DB_COLLECTIONS_NAME, (collection) => {
        return collection.insertOne({ email }); //({ email });
      });
      if (resp.success === false) {
        res.status(400).json({
          message: resp.message,
        });
        return;
      }
      res.status(200).json({
        message: "register email successfully!",
        email: email,
      });
      break;
    }
    default: {
      res.status(404).json({
        message: "not found",
      });
    }
  }
}

export default handler;
