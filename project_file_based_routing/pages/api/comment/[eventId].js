import { from_IdToId } from "@/utils/data_transform";
// import { mongodbAction } from "@/db/mongodb_utils";
import { mongodbAction } from "@/db/utils";
import { isCommentObjValid } from "@/utils/data_check";

const DB_COLLECTIONS_NAME = "comments";

async function handler(req, res) {
  const { eventId } = req.query;
  const { method } = req;
  switch (method) {
    case "GET": {
      const commentsFromMongodb = await mongodbAction(
        DB_COLLECTIONS_NAME,
        (collection) => {
          return collection
            .find({ eventId: eventId })
            .sort({ _id: -1 })
            .toArray();
        }
      );

      res.status(201).json({
        message: "fetch comments successfulyl",
        comments: from_IdToId(commentsFromMongodb),
      });
      return;
    }
    case "POST": {
      const { name, comment, email } = req.body;
      const commentObj = {
        email,
        comment,
        name,
        eventId,
      };
      if (!isCommentObjValid(commentObj)) {
        res.status(422).json({ message: "invalid input data" });
        return;
      }

      const resp = await mongodbAction(DB_COLLECTIONS_NAME, (collection) =>
        collection.insertOne(commentObj)
      );
      if (resp.success === false) {
        //response error
        res.status(500).json({
          message:
            typeof resp.message === "string"
              ? resp.message
              : "fail to create comment",
        });
      } else {
        // response 201
        res.status(201).json({
          message: "create comment successfully!",
          comment: commentObj,
        });
      }

      return;
    }
    default: {
      res.status(404);
    }
  }
}

export default handler;
