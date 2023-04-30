import { registerNewsletter } from "@/api/newsletter";
import classes from "./newsletter-registration.module.css";
import { useRef, useContext } from "react";
import NotificationContext from "@/store/notification-context";

function NewsletterRegistration() {
  const notificationContext = useContext(NotificationContext);
  const emailRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();
    notificationContext.showNotification({
      title: "Signing up newsletter",
      status: "pending",
      message: "Registering for newsletter...",
    });
    registerNewsletter(emailRef.current.value)
      .then((res) => {
        notificationContext.showNotification({
          title: "Success!",
          status: "success",
          message: "Sign up newsletter successfully!",
        });
      })
      .catch((err) => {
        notificationContext.showNotification({
          title: "Fail!",
          status: "error",
          message: err.message || "Fail to sign up newsletter",
        });
      });

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
