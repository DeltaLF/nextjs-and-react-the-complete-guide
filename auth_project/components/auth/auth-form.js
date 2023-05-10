import { useState, useRef } from "react";
import classes from "./auth-form.module.css";
import { createUser } from "@/fe-lib/auth";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const rouetr = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }
  async function submitHanlder(event) {
    event.preventDefault();
    // add validation

    if (isLogin) {
      // either success or fail, result will always be an object
      const result = await signIn("credentials", {
        redirect: false,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      if (!result.error) {
        rouetr.replace("/profile");
      }
      console.log(result);
    } else {
      try {
        const result = await createUser(
          emailRef.current.value,
          passwordRef.current.value
        );
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHanlder}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
