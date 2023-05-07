import { wrappedFetch } from "@/fe-lib/api";
import { useContext, useState } from "react";
import classes from "./contact-form.module.css";
import NotificationContext from "@/store/notificationContext";

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessag] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const notificationCtx = useContext(NotificationContext);
  const { setNotification } = notificationCtx;

  function sendMessageHandler(event) {
    event.preventDefault();
    setNotification({
      title: "pending",
      status: "pending",
      message: "Submiting messages....",
    });

    wrappedFetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setNotification({
          title: "success",
          status: "success",
          message: res.message,
        });
      })
      .catch((err) => {
        setNotification({
          title: "error occurred!",
          message: err.message,
          status: "error",
        });
      });
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            type="text"
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessag(event.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
