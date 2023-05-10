import { changePassword } from "@/fe-lib/auth";
import classes from "./profile-form.module.css";
import { useRef } from "react";

function ProfileForm() {
  const newPasswordInputRef = useRef();
  const oldPasswordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    const enteredOldPassword = oldPasswordInputRef.current.value;
    // add validation
    if (enteredNewPassword.length > 4 && enteredOldPassword.length > 4) {
      changePassword(enteredOldPassword, enteredNewPassword);
    }
    console.log(enteredNewPassword, enteredOldPassword);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
