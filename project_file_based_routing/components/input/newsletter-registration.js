import { registerNewsletter } from "@/api/newsletter";
import { useRef, useContext } from "react";
import NotificationContext from "@/store/notification-context";
import styled from "styled-components";

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
    <Newsletter>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <Control>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </Control>
      </form>
    </Newsletter>
  );
}

export default NewsletterRegistration;

const Newsletter = styled.section`
  margin: 3rem auto;
  width: 90%;
  max-width: 20rem;
  h2 {
    text-align: center;
  }
  button {
    background-color: #03be9f;
    border: 1px solid #03be9f;
    border-radius: 6px;
    color: #dafff7;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    font: inherit;
    cursor: pointer;
  }
  button:hover,
  button:active {
    background-color: #02afa1;
    border-color: #02afa1;
  }
`;

const Control = styled.div`
  display: flex;
  input {
    flex: 1;
    font: inherit;
    padding: 0.25rem;
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid #ccc;
  }
`;
