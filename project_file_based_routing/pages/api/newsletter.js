function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST": {
      const { email } = JSON.parse(req.body);
      if (!email || !email.includes("@")) {
        res.status(422).json("invalid email address");
        return;
      }

      res.status(200).json({
        message: "register email successfully!",
        email: email,
      });
      break;
    }
    default: {
      res.status(404);
    }
  }
}

export default handler;
