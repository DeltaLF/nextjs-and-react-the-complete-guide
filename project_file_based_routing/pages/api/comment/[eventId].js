import { fromObjectToArray } from "@/utils/data_transform";
async function handler(req, res) {
  const { eventId } = req.query;
  console.log("eventId", eventId);
  const { method } = req;
  switch (method) {
    case "GET": {
      const commentsObj = await fetch(
        `${process.env.NEXT_PUBLIC_FIREBASE_URL}/comments/${eventId}.json`
      )
        .then((response) => response.json())
        .catch((e) => {
          console.log("fail to fecth event id", id, e);
        });
      const comments = fromObjectToArray(commentsObj);
      console.log(comments, commentsObj);
      res.status(201).json({
        message: "fetch comments successfulyl",
        comments: comments,
      });
      return;
    }
    case "PATCH": {
      const { email, comment, name } = req.body;
      console.log("pppppppppatch");
      if (
        !email?.includes("@") ||
        !name ||
        name.trim() === "" ||
        !comment ||
        comment.trim() === ""
      ) {
        res.status(422).json({ message: "invalid input data" });
        return;
      }

      const newCommentObj = { [Number(new Date())]: { email, comment, name } };
      const responseData = await fetch(
        `${process.env.NEXT_PUBLIC_FIREBASE_URL}/comments/${eventId}.json`,
        {
          method: "PATCH",
          body: JSON.stringify(newCommentObj),
        }
      )
        .then((response) => response.json())
        .catch((e) => {
          console.log("fail to add new comment", eventId, e);
        });
      res.status(201).json({
        message: "create comment successfully!",
        comment: responseData,
      });
      return;
    }
    default: {
      res.status(404);
    }
  }
}

export default handler;
